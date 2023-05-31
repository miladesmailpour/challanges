const Circle = require('./lib/Circle.js')
const Shape = require('./lib/Shape.js')

const init = () => {
    const shape = new Shape({
        hight: 13,
        width: 13,
        fillColor: 'red',
        strokeColor: 'red',
        strokeWidth: 13
    })
    const circle = new Circle({
        hight: 13,
        width: 13,
        fillColor: 'red',
        strokeColor: 'red',
        strokeWidth: 13,
        redius: 113
    })
    console.log(shape, circle)
}
init()