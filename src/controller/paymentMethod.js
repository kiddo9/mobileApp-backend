const Path = require('path')
const readData = require('../middleware/dataReader')

const filePath = Path.join(__dirname, '../../data/paymentMethod.json')


exports.paymentMethod = (req, res) => {
    const payments = readData(filePath)

    return res.json(payments)
}

exports.getPaymentMethod = async(req, res) => {
    try {
        const {id} = req.params

        const paymentMethod = readData(filePath)
        const getMethod = await paymentMethod.find(e => e.id == id)

        if(getMethod){ 
            return res.json(getMethod)
        }
    } catch (error) {
        console.log(error);
    }
}