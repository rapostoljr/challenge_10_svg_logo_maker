const Circle = require('../lib/circle');
const Square = require('../lib/square');
const Triangle = require('../lib/triangle');
const Shapes = require('../lib/shapes')

describe('Circle', () => {
    test('Checks if circle renders correctly', () => {
        const circle = new Circle();
        
        let shapeColor = 'blue';
        let textColor = 'white';
        let text = 'CIR';

        circle.applyShapeColor(shapeColor);
        circle.applyText(text);
        circle.applyTextColor(textColor);
        expect(circle.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="100" cy="100" fill="${shapeColor}" />
        <text fill="${textColor}" font-size="50" x="34%" y="54%" text-anchor="middle">${text}</text>
        </svg>`);
    });
  });

  describe('Square', () => {
    test('Checks if square renders correctly', () => {
        const square = new Square();
        
        let shapeColor = 'gold';
        let textColor = 'purple';
        let text = 'SQU';

        square.applyShapeColor(shapeColor);
        square.applyText(text);
        square.applyTextColor(textColor);
        expect(square.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${shapeColor}" />
        <text fill="${textColor}" font-size="50" x="50%" y="50%" text-anchor="middle">${text}</text>
        </svg>`);
    });
  });

  describe('Triangle', () => {
    test('Checks if triangle renders correctly', () => {
        const triangle = new Triangle();
        
        let shapeColor = 'black';
        let textColor = 'yellow';
        let text = 'TRI';

        triangle.applyShapeColor(shapeColor);
        triangle.applyText(text);
        triangle.applyTextColor(textColor);
        expect(triangle.render()).toEqual(`<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 200,200 0,200" style="fill:${shapeColor}" />
        <text fill="${textColor}" font-size="50" x="50%" y="50%" text-anchor="middle">${text}</text>
         </svg>`);
    });
  });
    