const Circle = require('../lib/Circle.js')
const Shape = require('../lib/Circle.js')

// All require test for Circle class
describe('Circle', () => {
    // Test to verify the instantiation the Shape class
    describe('Instantiation', () => {
        it('Should be the instance of Circle class', () => {
            const circle = new Circle()
            expect(circle).toBeInstanceOf(Circle)
        })
    })
    // Test to verify reduis assgin to the corresponding property
    describe('Redius assign', () => {
        it('Should set redius property', () => {
            const redius = 113
            const circle = new Circle({ redius: redius })
            expect(circle.redius).toBe(redius)
        })
    })
    // Test to verify cx assgin to the corresponding property
    describe('CX assign', () => {
        it('Should set redius property', () => {
            const cx = 113
            const circle = new Circle({ cx: cx })
            expect(circle.cx).toBe(cx)
        })
    })
    // Test to verify cy assgin to the corresponding property
    describe('CY assign', () => {
        it('Should set cy property', () => {
            const cy = 113
            const circle = new Circle({ cy: cy })
            expect(circle.cy).toBe(cy)
        })
    })
    // Test the render() for corresponding return value
    describe('Render method', () => {
        it('Should return a string representing svg circle', () => {
            const svgCircle = '<circle cx="150" cy="150" r="113" stroke="black" fill="red" stroke-width="13"/>'
            const circle = new Circle({
                hight: 13,
                width: 13,
                fillColor: 'red',
                strokeColor: 'black',
                strokeWidth: 13,
                redius: 113
            })
            expect(circle.render()).toBe(svgCircle)
        })
    })

})