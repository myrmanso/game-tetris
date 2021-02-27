class Player extends CommonElements {
  constructor(context, canvas, posX, posY, boardMatrix) {
    super(context, canvas, posX, posY);
    this.color = '';
    this.matrix = [];
    this.boardMatrix = boardMatrix;
  }

  moveDown(speed) {
    this.posY += speed;
  }

  moveHorizontally(offset) {
    this.posX += offset;
    if (this.collide(this.boardMatrix)) {
      this.posX -= offset;
    }
  }

  moveVertically() {
    this.posY++;
    if (this.collide(this.boardMatrix)) {
      this.posY--;
    }
  }

  moveToDirection(keyCode) {
    switch (keyCode) {
      case 'ArrowLeft':
        this.moveHorizontally(-1)
        break;
      case 'ArrowRight':
        this.moveHorizontally(1)
        break;
      case 'ArrowDown':
        this.moveVertically();
        break;
      default:
        break;
    }
  }
};