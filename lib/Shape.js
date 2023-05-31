class Shape {
    constructor({ hight = 100, width = 100, fillColor = 'transparent', strokeColor = 'black', strokeWidth = 1 } = {}) {
        this.hight = hight
        this.width = width
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.strokeWidth = strokeWidth

    }
    render() {
        throw new Error('This method requires to override in extended class(child)')
    }
}
module.exports = Shape