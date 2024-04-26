const Shape = require('./shapes');

class Triangle extends Shape {
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 200,200 0,200" style="fill:${this.shapeColor}" />
        <text fill="${this.textColor}" font-size="50" x="50%" y="50%" text-anchor="middle">${this.text}</text>
         </svg>`
    }

    
}

module.exports = Triangle;