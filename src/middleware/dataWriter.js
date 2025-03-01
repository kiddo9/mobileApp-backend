const fs = require('fs')

const writeData = (jsonFilePath, data) => {
    fs.writeFileSync(jsonFilePath,
        JSON.stringify(data, null, 2)
     )
}

module.exports = writeData