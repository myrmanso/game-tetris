class Player extends CommonElements {
  constructor(context, canvas, posX, posY, piece) {
    super(context, canvas, posX, posY);
    this.color = piece.color;
    this.matrix = piece.matrix;
    this.position = {
      x: this.posX,
      y: this.posY,
    };
  }

  moveDown(speed) {
    this.position.y += speed;
  }

  consoleMove(keyCode, counter) {
    switch (keyCode) {
      case ArrowLeft:
        thisposition.x -= 1;
        break;
      case ArrowRight:
        thisposition.x += 1;
        break;
      case ArrowDown:
        counter = 0;
        thisposition.y++;
        break;
      default:
        window.alert('Digite um movimento valido')
        break;
    }
  }
};