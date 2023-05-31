const Shape = require("./Shape");

class Triangle extends Shape {
    constructor({ fillColor, text, textColor } = {}) {
        super({ fillColor, text, textColor })
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>\n` +
            `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">\n` +
            `<polygon points="150,250 50,75 250, 75" fill="${this.fillColor}"/>\n` +
            `<text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="70" >${this.text}</text>\n` +
            `</svg>`
    }
}
module.exports = Triangle