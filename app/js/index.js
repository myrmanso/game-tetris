//Pegar o canvas no HTML
const canvas = document.getElementById('canvas');

//inserir no contexto
const context = canvas.getContext('2d');

context.scale(20, 20)

context.fillStyle = '#899874';
context.fillRect(0, 0, canvas.width, canvas.height);







