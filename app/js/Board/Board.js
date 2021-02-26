import Element from '../Element/Element';

class Board extends Element {
  constructor(context, canvas, positionX, positionY, width, color, numberColumn, numberRow, scaleX, scaleY) {
    super(context, canvas, positionX, positionY, width, heigth)
    this.color = color;
    this.matrix = [];
    this.matrixBoardParams = {
      numberRow: numberRow,
      numberColumn: numberColumn
    };
    this.scale = {
      x: scaleX,
      y: scaleY,
    };
  }

  scaleBoard() {
    this.context.scale(this.scale.x, this.scale.y)
  }

  fillBoard() {
    this.context.fillStyle = this.color;
    context.fillRect(0, 0, this.width, this.height);
  }

  bildBoardMatrix() {
    const matrixBoard = [];
    while (this.matrixBoardParams.numberColumn--) {
      matrix.push(new Array(this.matrixBoardParams.numberRow).fill(0));
    }
    this.matrixBoard = matrixBoard;
  }
}
