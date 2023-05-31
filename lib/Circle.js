const Shape = require("./Shape");

class Circle extends Shape {
    constructor({ fillColor, text, textColor, redius = 10, cx = 150, cy = 150 } = {}) {
        super({ fillColor, text, textColor })
        this.redius = redius
        this.cx = cx
        this.cy = cy
    }
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.redius}" fill="${this.fillColor}"/>`
    }

}
module.exports = Circle