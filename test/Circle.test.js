const Circle = require('../lib/Circle.js')

// All require test for Circle class
describe('Circle', () => {
    // Test to verify the instantiation the Circle class
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
            const svgCircle = `<?xml version="1.0" standalone="no"?>\n` +
                `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">\n` +
                '<circle cx="150" cy="150" r="113" fill="red"/>\n' +
                `<text x="150" y="170" fill="black" text-anchor="middle" font-size="70" >AAA</text>\n` +
                `</svg>`
            const circle = new Circle({
                fillColor: 'red',
                text: 'AAA',
                textColor: 'black',
                redius: 113
            })
            expect(circle.render()).toBe(svgCircle)
        })
    })

})