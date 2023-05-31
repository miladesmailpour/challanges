const Triangle = require('../lib/Triangle.js')

// All require test for Triangle class
describe('Triangle', () => {
    // Test to verify the instantiation the Triangle class
    describe('Instantiation', () => {
        it('Should be the instance of Triangle class', () => {
            const triangle = new Triangle()
            expect(triangle).toBeInstanceOf(Triangle)
        })
    })

    // Test the render() for corresponding return value
    describe('Render method', () => {
        it('Should return a string representing svg triangle', () => {
            const svgTriangle = `<?xml version="1.0" standalone="no"?>\n` +
                `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">\n` +
                `<polygon points="150,250 50,75 250, 75" fill="red"/>\n` +
                `<text x="150" y="150" fill="black" text-anchor="middle" font-size="70" >AAA</text>\n` +
                `</svg>`

            const triangle = new Triangle({
                fillColor: 'red',
                text: 'AAA',
                textColor: 'black',
            })
            expect(triangle.render()).toBe(svgTriangle)
        })
    })
})