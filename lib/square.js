const Shape = require('./shapes');

class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${this.shapeColor}" />
        <text fill="${this.textColor}" font-size="100" x="50%" y="50%" text-anchor="middle">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;