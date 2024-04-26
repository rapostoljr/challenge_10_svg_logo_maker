const Shape = require('./shapes');

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="100" cy="100" fill="${this.shapeColor}" />
        <text fill="${this.textColor}" font-size="50" x="34%" y="54%" text-anchor="middle">${this.text}</text>
        </svg>`
    }
}

module.exports = Circle;