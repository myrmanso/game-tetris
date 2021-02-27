class Element {
  coonstructor(context, canvas, posX, posY, width, heigth, counter) {
    this.context = context;
    this.canvas = canvas;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = heigth;
    this.counter = counter;
  }
}

export default Element;
