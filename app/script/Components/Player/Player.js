class Player extends CommonElements {
  constructor(context, canvas, posX, posY, piece) {
    super(context, canvas, posX, posY);
    this.color = piece.color;
    this.matrix = piece.matrix;
  }

  moveDown(speed) {
    this.posY += speed;
  }

  moveToDirection(keyCode) {
    switch (keyCode) {
      case ArrowLeft:
        thisposition.x -= 1;
        break;
      case ArrowRight:
        thisposition.x += 1;
        break;
      case ArrowDown:
        thisposition.y++;
        break;
      default:
        window.alert('Digite um movimento valido')
        break;
    }
  }
};