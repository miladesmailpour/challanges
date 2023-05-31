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
    // // Test to verify hight assgin to the corresponding property
    // describe('Hight assign', () => {
    //     it('Should set hight property', () => {
    //         const hight = 113
    //         const shape = new Shape({ hight: hight })
    //         expect(shape.hight).toBe(hight)
    //     })
    // })

})