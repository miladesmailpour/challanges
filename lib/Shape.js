class Shape {
    constructor({ fillColor = 'blue', text = '', textColor = 'black' } = {}) {
        this.fillColor = fillColor
        this.text = text
        this.textColor = textColor

    }
    render() {
        throw new Error('This method requires to override in extended class(child)')
    }
}
module.exports = Shape