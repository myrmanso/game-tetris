class Player extends Object {
  constructor(context, canvas, posX, posY, piece) {
    super(context, canvas, posX, posY);
    this.color = piece.color;
    this.matrix = piece.matrix;
  }

  moves(keyCode, counter) {
    switch (keyCode) {
      case ArrowLeft:
        this.posX -= 1;
        break;
      case ArrowRight:
        this.posX += 1;
        break;
      case ArrowDown:
        counter = 0;
        this.posY++;
        break;
      default:
        window.alert('Digite um movimento valido')
        break;
    }
  }
};