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
        window.alert('Digite um movimento valido')
        break;
    }
  }
};