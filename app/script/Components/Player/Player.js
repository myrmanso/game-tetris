import Object from '../Object/Object';

class Player extends Object {
  coonstructor(context, canvas, posX, posY, width, heigth, counter, piece) {
    super(context, canvas, posX, posY, width, heigth, counter)
    this.color = piece.color;
    this.matrix = piece.matrix;
  }

  moves(keyCode) {
    switch (keyCode) {
      case ArrowLeft:
        this.posX -= 1;
        break;
      case ArrowRight:
        this.posX += 1;
        break;
      case ArrowDown:
        this.counter = 0;
        this.posY++;
        break;
      default:
        window.alert('Digite um movimento valido')
        break;
    }
  }
}

export default Player;