window.onload = () => {
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  context.scale(20, 20);

  const board = new Board(context, canvas, 0, 0, canvas.width, canvas.height, '#899874', 20, 12);
  board.bildBoardMatrix();

  const player = new Player(context, canvas, 1, 1, board.matrix);

  const gameTetris = new Game(context, canvas, board, player);

  gameTetris.createPiece()
  gameTetris.draw();
  gameTetris.fallingPiece();
  gameTetris.configureKeyboardControls();
};



