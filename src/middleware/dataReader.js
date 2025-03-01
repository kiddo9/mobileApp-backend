
const fs = require('fs');

const readData = (jsonFilePath) => {
    const data = fs.readFileSync(jsonFilePath, "utf8").trim()

    if(!data){
        return []
    }

    try {
        const parsedData = JSON.parse(data)
        return Array.isArray (parsedData) ? parsedData : []
    } catch (error) {
        return []
    }
}

module.exports = readData