const colorPalette = ['yellow', 'green', 'yellowgreen', 'aqua', 'white', 'snow', 'ivory', 'grey', 'black', 'lime', 'indigo', 'orange', 'red', 'brown',
    'indigo', 'pink', 'navy', 'blue', 'tan', 'violet', 'purple', 'palegreen', 'gold', 'skyblue', 'teal']
const pattern = new RegExp('[0-9a-fA-F]{6}')
const dataValidation = (data) => {
    const result = data
    if (textIsValid(data.text) && colorIsValid(data.color) && colorIsValid(data.textColor)) {
        result.text = result.text.toUpperCase()
        if (!colorPalette.includes(result.textColor)) {
            result.textColor = `#${result.textColor}`
        }
        if (!colorPalette.includes(result.color)) {
            result.color = `#${result.color}`
        }
        return result
    }
    return false
}
// text validation
const textIsValid = (text) => {
    if (text.length <= 3 && text.length >= 1) {
        return true
    }
    return false
}
// color validation
const colorIsValid = (color) => {
    if (!color) {
        return false
    }
    if (colorPalette.includes(color)) {
        return true
    }
    else {
        if (pattern.test(color)) {
            return true
        }
    }
    return false
}
module.exports = { dataValidation }
