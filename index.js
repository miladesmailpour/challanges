const Circle = require('./lib/Circle.js')
const Rectangle = require('./lib/Rectangle.js')
const Shape = require('./lib/Shape.js')

const init = () => {
    const shape = new Shape({
        hight: 13,
        fillColor: 'red',
        strokeColor: 'red',
        strokeWidth: 13
    })
    const circle = new Circle({
        fillColor: 'red',
        strokeColor: 'black',
        strokeWidth: 13,
        redius: 113
    })
    const rectangle = new Rectangle({
        hight: 150,
        width: 150,
        cornerRedius: 15,
        fillColor: 'red',
        strokeColor: 'black',
        strokeWidth: 13,
    })
    console.log(rectangle, rectangle.render())
}
init()