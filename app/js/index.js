//Pegar o canvas no HTML
const canvas = document.getElementById('canvas');

//inserir no contexto
const context = canvas.getContext('2d');

context.scale(20, 20)

context.fillStyle = '#899874';
context.fillRect(0, 0, canvas.width, canvas.height);

//creates board
let board = [];
for (let l = 0; l < 20; l++) {
  board[l] = [];
  for (let c = 0; c < 10; c++) {
    board[l][c] = 0;
  }
}

const matrix = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];

matrix.forEach((row, y) => {
  row.forEach((value, x) => {
    if (value !== 0) {
      console.log('y dentro do if', y);
      console.log('x dentro do if', x);
      context.fillStyle = 'red';
      context.fillRect(x + 4, y + 4, 1, 1);
    }
  });
});




