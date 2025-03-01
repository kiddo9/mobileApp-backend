const express = require('express');
const app = express.Router();
 
 app.get('/chat', async (req, res) => {
     res.json({success: true, message: 'its ok now'})
 })

 module.exports = app;