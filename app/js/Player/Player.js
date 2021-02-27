import ELement from '../Element/Element';
class Player extends ELement {
  coonstructor(context, canvas, posX, posY, width, heigth, piece) {
    super(context, canvas, posX, posY, width, heigth)
    this.color = piece.color;
    this.matrix = piece.matrix;
  }

  drawPlayer() {
    this.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.color;
          this.context.fillRect(
            x + this.posX,
            y + this.posY,
            1, 1);
        }
      });
    });
  }

  moveLeft() {
    return this.posX -= 1;
  }

  moveRight() {
    return this.posX += 1;
  }

  movesBottom() {
    this.counter = 0; s
    return this.posY++;
    ;
  }

  moveRotation() {

  }

  moves(keyCode) {
    switch (keyCode) {
      case ArrowLeft:
        this.moveLeft;
        break;
      case ArrowRight:
        this.moveRight;
        break;
      case ArrowDown:
        this.movesBottom;
        break;
      default:
        window.alert('Digite um movimento valido')
        break;
    }
  }
}