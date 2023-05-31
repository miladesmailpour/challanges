const Shape = require("./Shape");

class Rectangle extends Shape {
    constructor({ fillColor, text, textColor, height = 50, width = 50, cornerRedius = 0 } = {}) {
        super({ fillColor, text, textColor })
        this.height = height
        this.width = width
        this.cornerRedius = cornerRedius
        this.x = Math.floor(Math.abs((width / 2) - 150))
        this.y = Math.floor(Math.abs((height / 2) - 150))
    }
    render() {
        return `<rect x="${this.x}" y="${this.y}" rx="${this.cornerRedius}" ry="${this.cornerRedius}" width="${this.width}" height="${this.height}" fill="${this.fillColor}"/>`
    }
}
module.exports = Rectangle
