import Object from '../Object/Object';

class Game extends Object {
  constructor(context, canvas) {
    super(context, canvas);
    this.board = board;
    this.player = player;
  }

  draw() {
    this.drawMatrix(this.board);
    this.drawMatrix(this.player);
  }
}

export default Game;
