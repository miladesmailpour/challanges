const Shape = require('../lib/Shape.js')

// All require test for Shape class
describe('Shape', () => {
    // Test to verify the instantiation the Shape class
    describe('Instantiation', () => {
        it('Should be the instance of Shape class', () => {
            const shape = new Shape()
            expect(shape).toBeInstanceOf(Shape)
        })
    })
    // Test to verify fillColor assgin to the corresponding property
    describe('FillColor assign', () => {
        it('Should set fillColor property', () => {
            const fillColor = 'blue'
            const shape = new Shape({ fillColor: fillColor })
            expect(shape.fillColor).toBe(fillColor)
        })
    })
    // Test to verify text assgin to the corresponding property
    describe('StrokeColor assign', () => {
        it('Should set strokeColor property', () => {
            const text = 'AAA'
            const shape = new Shape({ text: text })
            expect(shape.text).toBe(text)
        })
    })
    // Test to verify strokeWidth assgin to the corresponding property
    describe('StrokeWidth assign', () => {
        it('Should set strokeWidth property', () => {
            const textColor = 'blue'
            const shape = new Shape({ textColor: textColor })
            expect(shape.textColor).toBe(textColor)
        })
    })
    // Test throw Exception for render method
    describe('Render method trow exception', () => {
        it('should throw an error when render() call from Shape', () => {
            const shape = new Shape()
            // const err = new Error('This method requires to override in extended class(child)')
            expect(shape.render).toThrowError(Error)
        })
    })
})