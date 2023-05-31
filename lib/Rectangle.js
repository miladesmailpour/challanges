const Shape = require("./Shape");

class Rectangle extends Shape {
    constructor({ fillColor, text, textColor, height = 150, width = 150, cornerRedius = 1 } = {}) {
        super({ fillColor, text, textColor })
        this.height = height
        this.width = width
        this.cornerRedius = cornerRedius
        this.x = Math.floor(Math.abs((width / 2) - 150))
        this.y = Math.floor(Math.abs((height / 2) - 150))
    }
    render() {
        return `<?xml version="1.0" standalone="no"?>\n` +
            `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">\n` +
            `<rect x="${this.x}" y="${this.y}" rx="${this.cornerRedius}" ry="${this.cornerRedius}" width="${this.width}" height="${this.height}" fill="${this.fillColor}"/>\n` +
            `<text x="150" y="170" fill="${this.textColor}" text-anchor="middle" font-size="65" >${this.text}</text>\n` +
            `</svg>`
    }
}
module.exports = Rectangle
