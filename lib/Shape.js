class Shape {
    constructor({ fillColor = 'transparent', strokeColor = 'black', strokeWidth = 1 } = {}) {
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.strokeWidth = strokeWidth

    }
    render() {
        throw new Error('This method requires to override in extended class(child)')
    }
}
module.exports = Shape