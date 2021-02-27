window.onload = () => {
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  context.scale(20, 20);

  const board = new Board(context, canvas, 0, 0, canvas.width, canvas.height, '#899874', 10, 20, 20, 20);
  board.bildBoardMatrix();

  const player = new Player(context, canvas, 1, 1, pieces[0]);

  const gameTetris = new Game(context, canvas, board, player);

  gameTetris.draw();
  gameTetris.fallingPiece();
  gameTetris.configureKeyboardControls();
};



