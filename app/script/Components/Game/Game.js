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
    this.score = 0;
  }

  configureKeyboardControls() {
    document.addEventListener('keydown', event => {
      this.player.moveToDirection(event.key);
    });
  }

  startGame() {
    this.createPiece()
    this.draw();
    this.configureKeyboardControls();
    this.fallingPiece();
    this.updateScore();

    if (this.player.collide(this.board.matrix)) {
      this.board.matrix.forEach(row => row.fill(0));
    }
  }

  checkIfIsCompleteLine() {
    verfication: for (let line = this.board.matrix.length - 1; line > 0; --line) {
      for (let column = 0; column < this.board.matrix[line].length; ++column) {
        if (this.board.matrix[line][column] === 0) {
          continue verfication;
        }
      }

      const row = this.board.matrix.splice(line, 1)[0].fill(0);
      console.log(row)
      this.board.matrix.unshift(row);
      ++line;

      this.score += 10;
    }
  }

  drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = colors[value];
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

    this.player.matrix = pieces[positionArray];
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
          this.createPiece();
          this.checkIfIsCompleteLine();
          this.updateScore();
        }
        this.counter = 0;
      }

      this.lastTime = time;

      this.draw();
    }

    window.requestAnimationFrame((time = 0) => this.fallingPiece(time));
  }

  updateScore() {
    document.querySelector('.score').innerText = this.score;
  }

};