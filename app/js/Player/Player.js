import ELement from '../Element/Element';

class Player extends ELement {
  coonstructor(context, canvas, positionX, positionY, width, heigth, color, matrix) {
    super(context, canvas, positionX, positionY, width, heigth)
    this.score = 0;
    this.color = color;
    this.matrix = matrix;
  }

  drawPlayer() {

  }


}