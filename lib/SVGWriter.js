const fs = require('fs')

const SVGWriter = (fileName, data) => {
    fs.writeFile(`./output/${fileName}-LOGO.svg`, data, (err) => err ? console.error(err) : console.log('Success!'))
}
module.exports = { SVGWriter }
