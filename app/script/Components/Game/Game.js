class Game {
  constructor(context, canvas, board, player) {
    this.context = context;
    this.canvas = canvas;
    this.board = board;
    this.player = player;
    this.speed = 1;
    this.lastTime = 0;
    this.counter = 0;
    this.fallInterval = 1000;
  }

  drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.player.color;
          this.context.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }

  draw() {
    this.board.fillBoard();

    this.drawMatrix(this.board.matrix, { x: 0, y: 0 });
    this.drawMatrix(this.player.matrix, { x: this.player.posX, y: this.player.posY });
  }

  createPiece() {
    const positionArray = Math.floor(Math.random() * pieces.length);

    this.player.color = pieces[positionArray].color;
    this.player.matrix = pieces[positionArray].matrix;
    this.player.posY = 0;
    this.player.posX = (this.board.matrix[0].length / 2 | 0) - (this.player.matrix / 2 | 0);
  }

  mergeBoardWithPlayer() {
    this.player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.board.matrix[y + this.player.posY][x + this.player.posX] = value;
        }
      });
    });
  }

  fallingPiece(time) {
    if (typeof time === 'number') {
      const deltaTime = time - this.lastTime;

      this.counter += parseFloat(deltaTime);

      if (this.counter > this.fallInterval) {
        this.player.moveDown(this.speed);
        if (this.player.collide(this.board.matrix)) {
          this.player.posY--;
          this.mergeBoardWithPlayer();
          this.createPiece()
        }
        this.counter = 0;
      }

      this.lastTime = time;

      this.draw();
    }

    window.requestAnimationFrame((time = 0) => this.fallingPiece(time));
  }

  configureKeyboardControls() {
    document.addEventListener('keydown', event => {
      this.player.moveToDirection(event.key);
    });
  }
};