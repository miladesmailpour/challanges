const Circle = require('./lib/Circle.js')
const Rectangle = require('./lib/Rectangle.js')
const Shape = require('./lib/Shape.js')
const Q = require('./lib/Questioner.js')
// const inquirer = require('inquirer')

const avialabeShapes = ['Circle', 'Rectangle', 'Triangle']
const shapeQuestions = [{ text: 'Please enter up to 3 character for your LOGO:' },
{ textColor: 'Please pick a color for your text: (black or FFF000)' },
{ selectedShape: 'What is the shape you willing to use in your LOGO?' },
{ color: 'Please enter a valid color or a hexadecimal number for your shape (black or FFF000)' },]

const svgMaker = (shape) => {
    if (shape === 'Circle') {
        const circle = new Circle()
    }
    if (shape === 'Rectangle') {
        const obj = svgMaker(c.selectedShape)
    }
    if (shape === 'Triangle') {
        const obj = svgMaker(c.selectedShape)
    }

}

const init = async () => {
    const userInput = await Q.inquirerQuestioner(shapeQuestions, avialabeShapes)
    const obj = svgMaker(c.selectedShape)
}
init()