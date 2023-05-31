const Shape = require("./Shape");

class Circle extends Shape {
    constructor({ hight, width, fillColor, strokeColor, strokeWidth, redius = 10 } = {}) {
        super({ hight, width, fillColor, strokeColor, strokeWidth })
        this.redius = redius
    }

}
module.exports = Circle