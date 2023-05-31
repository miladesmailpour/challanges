const Shape = require("./Shape");

class Circle extends Shape {
    constructor({ fillColor, text, textColor, redius = 75, cx = 150, cy = 150 } = {}) {
        super({ fillColor, text, textColor })
        this.redius = redius
        this.cx = cx
        this.cy = cy
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>\n` +
            `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">\n` +
            `<circle cx="${this.cx}" cy="${this.cy}" r="${this.redius}" fill="${this.fillColor}"/>\n` +
            `<text x="150" y="170" fill="${this.textColor}" text-anchor="middle" font-size="70" >${this.text}</text>\n` +
            `</svg>`
    }

}
module.exports = Circle