import ELement from '../Element/Element';
class Player extends ELement {
  coonstructor(context, canvas, posX, posY, width, heigth, counter, piece) {
    super(context, canvas, posX, posY, width, heigth, counter)
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