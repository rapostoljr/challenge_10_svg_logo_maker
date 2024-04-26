const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

function createLogo(data) {
    let shape = ""
    if (data.shape === 'Triangle') {
        shape = new Triangle(data.shape-color, data.text, data.text-color);
    } else if (data.shape === 'Circle') {
        shape = new Circle(data.shape-color, data.text, data.text-color);
    } else if (data.shape === 'Square') {
        shape = new Square(data.shape-color, data.text, data.text-color);
    } else {
        console.log('Please enter a valid shape.')
    }
    return shape.render();
}

module.exports = createLogo;
