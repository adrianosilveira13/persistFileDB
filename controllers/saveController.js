const fs = require('fs')
const fsPromises = fs.promises

exports.saveForm = async (req, res, next) => {
  try {
    const dataFile = await fsPromises.readFile(`${__dirname}/../data/data.json`, 'utf-8')
    const data = JSON.parse(dataFile)
    if (!req.body.data) {
      return res.status(400).json({
        status: 'fail',
        error: 'MissingInputData'
      })
    }
    data.push(req.body.data)
    await fsPromises.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(data), 'utf-8')
    res.status(200).json({
      status: 'success'
    })
  } catch (e) {
    console.log(e)
  }
}