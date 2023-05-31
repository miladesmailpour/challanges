const Rectangle = require('../lib/Rectangle.js')

// All require test for Rectangle class
describe('Rectangle', () => {
    // Test to verify the instantiation the Rectangle class
    describe('Instantiation', () => {
        it('Should be the instance of Rectangle class', () => {
            const rectangle = new Rectangle()
            expect(rectangle).toBeInstanceOf(Rectangle)
        })
    })
    // Test to verify hight assgin to the corresponding property
    describe('Height assign', () => {
        it('Should set height property', () => {
            const height = 113
            const rectangle = new Rectangle({ height: height })
            expect(rectangle.height).toBe(height)
        })
    })
    // Test to verify width assgin to the corresponding property
    describe('Width assign', () => {
        it('Should set width property', () => {
            const width = 113
            const rectangle = new Rectangle({ width: width })
            expect(rectangle.width).toBe(width)
        })
    })
    // Test to verify cornerRedius assgin to the corresponding property
    describe('Width assign', () => {
        it('Should set width property', () => {
            const cornerRedius = 5
            const rectangle = new Rectangle({ cornerRedius: cornerRedius })
            expect(rectangle.cornerRedius).toBe(cornerRedius)
        })
    })
    // Test the render() for corresponding return value
    describe('Render method', () => {
        it('Should return a string representing svg rectangle', () => {
            const svgCircle = '<rect x="75" y="125" rx="15" ry="15" width="150" height="50" stroke="black" fill="red" stroke-width="13"/>'
            const rectangle = new Rectangle({
                hight: 150,
                width: 150,
                cornerRedius: 15,
                fillColor: 'red',
                strokeColor: 'black',
                strokeWidth: 13,
            })
            expect(rectangle.render()).toBe(svgCircle)
        })
    })
})