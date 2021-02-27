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
      console.log('pele');
      this.posX -= offset;
    }
  }

  moveToDirection(keyCode) {
    switch (keyCode) {
      case 'ArrowLeft':
        this.posX -= 1;
        break;
      case 'ArrowRight':
        this.posX += 1;
        break;
      case 'ArrowDown':
        this.posY++;
        break;
      default:
        break;
    }
  }
};