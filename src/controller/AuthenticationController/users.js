const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const Secret_key = process.env.JWTSECRETKEY;
const readData = require("../../middleware/dataReader");
const writeData = require("../../middleware/dataWriter");
const path = require("path");

const userDataPath = path.join(__dirname, "../../../data/users.json");

// Function to read data from JSON file
// const readData = () => {
//     const data = fs.readFileSync(userDataPath, 'utf8').trim();

//     if (!data) return []; // Return empty array if file is empty

//     try {
//         const parsedData = JSON.parse(data);
//         return Array.isArray(parsedData) ? parsedData : [];
//     } catch (error) {
//         return []; // Return empty array if JSON is invalid
//     }
// };

// // Function to write data to JSON file
// const writeData = (data) => {
//     fs.writeFileSync(userDataPath,
//     JSON.stringify(data, null, 2), 'utf8');
// };

// **POST Endpoint to Create a New User (Signin)**
exports.Signin = async (req, res) => {
  try {
    const { firstName, LastName, email, password } = req.body;

    const users = readData(userDataPath); // Read existing users

    const emailExist = users.find((e) => e.email === email);

    if (emailExist) {
      return res.json({ message: "Email already exists" });
    }

    for (const user of users) {
      const passwordExist = await bcrypt.compare(password, user.password);
      if (passwordExist) {
        return res.json({ message: "password already exists" });
      }
    }

    const hashPassowrd = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      firstName,
      lastName: LastName,
      email,
      password: hashPassowrd,
    };

    users.push(newUser); // Add new user to the array
    writeData(userDataPath, users); // Save the full updated array back to JSON file

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = readData(userDataPath);

    const LogEmail = users.find((e) => e.email === email);

    if (!LogEmail) {
      return res.json({ message: "email does not exist" });
    }
    const passwordExist = await bcrypt.compare(password, LogEmail.password);

    if (!passwordExist) {
      return res.json({ message: "password incorrect" });
    }

    const logToken = Jwt.sign(
      {
        id: LogEmail.id,
        firstName: LogEmail.firstName,
        lastName: LogEmail.lastName,
        email: LogEmail.email,
      },
      Secret_key,
      { expiresIn: "19h" }
    );

    return res.json({
      success: true,
      message: "Login successful",
      token: logToken,
    });
  } catch (error) {
    res.json({ message: error });
    console.log(error);
  }
};

exports.auth = (req, res, next) => {
  const token = req.headers["authurization"];
  try {
    if (!token) {
      return res.json({ success: false });
    }
    const verifyUser = Jwt.verify(token, Secret_key);
    req.user = verifyUser;

    if (verifyUser) {
      res.json({ success: true, user: req.user });
      console.log(req.user);
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ message: "some thing went wrong" });
  }
};
