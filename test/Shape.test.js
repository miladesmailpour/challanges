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
    // Test to verify strokeColor assgin to the corresponding property
    describe('StrokeColor assign', () => {
        it('Should set strokeColor property', () => {
            const strokeColor = 'blue'
            const shape = new Shape({ strokeColor: strokeColor })
            expect(shape.strokeColor).toBe(strokeColor)
        })
    })
    // Test to verify strokeWidth assgin to the corresponding property
    describe('StrokeWidth assign', () => {
        it('Should set strokeWidth property', () => {
            const strokeWidth = 13
            const shape = new Shape({ strokeWidth: strokeWidth })
            expect(shape.strokeWidth).toBe(strokeWidth)
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