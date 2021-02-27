class Game extends Object {
  constructor(context, canvas, board, player) {
    super(context, canvas);
    this.board = board;
    this.player = player;
  }

  draw() {
    this.drawMatrix(this.board);
    this.drawMatrix(this.player);
  }
};