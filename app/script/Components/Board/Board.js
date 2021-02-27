class Board extends CommonElements {
  constructor(context, canvas, posX, posY, width, heigth, color, numberColumn, numberRow, scaleX, scaleY) {
    super(context, canvas, posX, posY, width, heigth)
    this.color = color;
    this.matrix = [];
    this.matrixBoardParams = {
      numberRow: numberRow,
      numberColumn: numberColumn
    };
  }

  fillBoard() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  bildBoardMatrix() {
    while (this.matrixBoardParams.numberColumn--) {
      this.matrix.push(new Array(this.matrixBoardParams.numberRow).fill(0));
    }
  }
};