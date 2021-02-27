class Game {
  constructor(context, canvas, board, player) {
    this.context = context;
    this.canvas = canvas;
    this.board = board;
    this.player = player;
  }

  drawMatrix(matrix) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = 'red';
          this.context.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  draw() {
    this.board.fillBoard();

    this.drawMatrix(this.board.matrix);
    this.drawMatrix(this.player.matrix);
  }
};