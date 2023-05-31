const Circle = require('./lib/Circle.js')
const Rectangle = require('./lib/Rectangle.js')
const Q = require('./lib/Questioner.js')
const SVGW = require('./lib/SVGWriter.js')
const DV = require('./lib/DataValidation.js')

const avialabeShapes = ['Circle', 'Rectangle', 'Triangle']
const shapeQuestions = [{ text: 'Please enter up to 3 character for your LOGO:' },
{ textColor: 'Please pick a color for your text: (black or FFF000)' },
{ selectedShape: 'What is the shape you willing to use in your LOGO?' },
{ color: 'Please enter a valid color or a hexadecimal number for your shape (black or FFF000)' },]

const svgMaker = (userInput) => {
    const shape = userInput.selectedShape
    if (shape === 'Circle') {
        const circle = new Circle({ fillColor: userInput.color, text: userInput.text, textColor: userInput.textColor })
        return circle.render()
    }
    if (shape === 'Rectangle') {
        const rectangle = new Rectangle({ fillColor: userInput.color, text: userInput.text, textColor: userInput.textColor })
        return rectangle.render()
    }
    if (shape === 'Triangle') {
        const triangle = new Triangle({ fillColor: userInput.color, text: userInput.text, textColor: userInput.textColor })
        return triangle.render()
    }

}

const init = async () => {
    const userInput = await Q.inquirerQuestioner(shapeQuestions, avialabeShapes)
    const validatedData = DV.dataValidation(userInput)
    if (validatedData) {
        SVGW.SVGWriter(userInput.selectedShape, svgMaker(userInput))
    } else {
        console.log('Text or one of the Colors are not in acceptable format! Please try again.')
    }

}
init()