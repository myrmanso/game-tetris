import ELement from '../Element/Element';

class Player extends ELement {
  coonstructor(context, canvas, posX, posY, width, heigth, piece) {
    super(context, canvas, posX, posY, width, heigth)
    this.score = 0;
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
}