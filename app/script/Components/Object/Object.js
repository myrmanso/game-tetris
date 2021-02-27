class Object {
  coonstructor(context, canvas, posX, posY, width, heigth, counter, matrix, color) {
    this.context = context;
    this.canvas = canvas;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = heigth;
    this.counter = counter;
    this.matrix = matrix;
    this.color = color;
  }

  position() {
    return {
      x: this.posX,
      y: this.posY,
    }
  };

  drawMatrix(element) {
    element.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.color;
          this.context.fillRect(
            x + element.position().x,
            y + element.position().y,
            1, 1);
        }
      });
    });
  }
};

