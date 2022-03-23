const fs = require('fs')
const fsPromises = fs.promises
const Form = require('../database/models/Form')

exports.insertDataDB = async (req, res) => {
  try {
    const dataString = await fsPromises.readFile(`${__dirname}/../data/data.json`, 'utf-8')
    const data = JSON.parse(dataString)
    if (data.length === 0) {
      return res.status(400).json({
        status: 'fail',
        error: 'MissingData'
      })
    } 
    data.forEach(async item => {
      await Form.create(item)
    })
    await fsPromises.writeFile(`${__dirname}/../data/data.json`, '[]', 'utf-8')
    res.status(200).json({
      status: 'data succesfully persisted'
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      status: 'fail',
      error: 'Something went very wrong'
    })
  }
}