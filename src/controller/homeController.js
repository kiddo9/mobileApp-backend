const path = require('path')
const readData = require('../middleware/dataReader')

const placesPath = path.join(__dirname, "../../data/place.json")

exports.Home = async (req, res) => {
    try {
        const places = readData(placesPath)
        return res.json(places)
    } catch (error) {
        res.json({message:  "something went wrong"})
    }
}

exports.getPlace = async (req, res) => {
    const {id} = req.params
    console.log(id);
    
    try {
        const place = readData(placesPath)
        const getPlace = place.find(i => i.id == id)
        console.log(getPlace);
        
        res.json(getPlace)
    } catch (error) {
        console.log(error);
        res.json({message: "something went wrong"})
    }
}