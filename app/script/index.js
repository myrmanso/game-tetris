class GameTetris {
  constructor(
    colorBoard = '#899874',
    widthBoad = this.canvas.width,
    heightBoard = this.canvas.height,
    // colorPiece,
    numberRow,
    numberColumn,
  ) {
    //Pegar o canvas no HTML
    this.canvas = document.getElementById('canvas');
    //inserir no contexto
    this.context = canvas.getContext('2d');
    //cor do jogo
    // this.colorBoard = colorBoard;
    // //largura do tabuleiro
    // this.widthBoard = widthBoad;
    // //altura do tabuleiro
    // this.heigthBoard = heightBoard;
    // //matriz do tabuleiro
    // this.matrixBoard = [];
    // //parametros matriz board
    // this.matrixBoardParams = {
    //   numberRow: numberRow,
    //   numberColumn: numberColumn
    // };
    //peças
    this.pieces = {}
    //peça da vez
    this.turnPiece = [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ];
    //cor das peças
    this.colorPiece = colorPiece;
    //inicio da contagem
    this.dropCounter = 0;
    //intervalo de tempo
    this.dropInterval = 1000;
    this.lastTime = 0;
  }

  // scale(x, y) {
  //   this.context.scale(x, y)
  // }

  // fillBoard() {
  //   this.context.fillStyle = this.colorBoard;
  //   context.fillRect(0, 0, this.widthBoard, this.heigthBoard);
  // }

  // bildBoardMatrix() {
  //   const matrixBoard = [];
  //   while (this.matrixBoardParams.numberColumn--) {
  //     matrix.push(new Array(this.matrixBoardParams.numberRow).fill(0));
  //   }
  //   this.matrixBoard = matrixBoard;
  // }

  drawMatrixOnBoard(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.colorPiece;
          this.context.fillRect(
            x + offset.x,
            y + offset.y,
            1, 1);
        }
      });
    });
  }

  update(time = 0) {
    const deltaTime = time - lastTime;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      playerDrop();
    }

    lastTime = time;

    draw();
    requestAnimationFrame(update);
  }

}

let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;

  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    playerDrop();
  }

  lastTime = time;

  draw();
  requestAnimationFrame(update);
}




