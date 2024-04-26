const Shape = require('./shapes');

class Triangle extends Shape {
    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,0 500,500 0,500" style="fill:${this.shapeColor}" />
        <text fill="${this.textColor}" font-size="100" x="50%" y="75%" text-anchor="middle">${this.text}</text>
         </svg>`
    }

    
}

module.exports = Triangle;