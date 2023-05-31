const Shape = require("./Shape");

class Circle extends Shape {
    constructor({ hight, width, fillColor, strokeColor, strokeWidth, redius = 10, cx = 150, cy = 150 } = {}) {
        super({ hight, width, fillColor, strokeColor, strokeWidth })
        this.redius = redius
        this.cx = cx
        this.cy = cy
    }
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.redius}" stroke="${this.strokeColor}" fill="${this.fillColor}" stroke-width="${this.strokeWidth}"/>`
    }

}
module.exports = Circle