const Shape = require('./shapes');

class Square extends Shape {
    render() {
        return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="${this.shapeColor}" />
        <text fill="${this.textColor}" font-size="100" x="160" y="270">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;