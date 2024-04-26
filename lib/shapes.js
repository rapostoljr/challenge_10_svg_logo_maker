class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    applyShapeColor(shapeColor) {
        this.color = shapeColor;
    }

    applyText(text) {
        this.text = text;
    }

    applyTextColor(textColor) {
        this.textColor = textColor;
    }
}

module.exports = Shape;