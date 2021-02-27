window.onload = () => {
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  context.scale(20, 20);
  const colorBoard = '#899874'
  const board = new Board(context, canvas, 0, 0, canvas.width, canvas.height, colorBoard, 20, 12);
  board.bildBoardMatrix();

  const player = new Player(context, canvas, 1, 1, board.matrix);

  const gameTetris = new Game(context, canvas, board, player);

  gameTetris.startGame()
};



