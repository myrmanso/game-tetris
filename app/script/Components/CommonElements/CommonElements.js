class CommonElements {
  constructor(context, canvas, posX, posY, width, heigth, counter, matrix, color) {
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

  collide(board) {
    for (let y = 0; y < this.matrix.length; ++y) {
      for (let x = 0; x < this.matrix[y].length; ++x) {
        if (this.matrix[y][x] !== 0 &&
          (board[y + this.posY] &&
            board[y + this.posY][x + this.posX]) !== 0) {
          return true;
        }
      }
    }
    return false;
  }
};

