class Board extends Object {
  constructor(context, canvas, posX, posY, width, heigth, color, numberColumn, numberRow, scaleX, scaleY) {
    super(context, canvas, posX, posY, width, heigth)
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
    this.posX = 0;
    this.posY = 0;
  }

  scaleBoard() {
    this.context.scale(this.scale.x, this.scale.y)
  }

  fillBoard() {
    this.context.fillStyle = this.color;
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  bildBoardMatrix() {
    const matrixBoard = [];
    while (this.matrixBoardParams.numberColumn--) {
      matrix.push(new Array(this.matrixBoardParams.numberRow).fill(0));
    }
    this.matrixBoard = matrixBoard;
  }
};