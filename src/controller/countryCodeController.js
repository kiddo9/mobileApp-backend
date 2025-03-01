const readData = require("../middleware/dataReader")
const path = require("path")

const countryCode = path.join(__dirname, "../../data/countryCode.json")

exports.countryCodeController = async (req, res) => {
    const codes = readData(countryCode)
    return res.json(codes)
}