import Settings from "./Settings.js";

class Piece extends Settings {
    constructor(_context, _tetrominos, color, leter) {
        super();
        this.context = _context;
        this.tetromino = _tetrominos;
        this.index = 0;
        this.selectedTetromino = this.tetromino[this.index];
        this.color = color;
        this.x = 3;
        this.y = (leter === 't' || leter === 'o') ? 0 : 1 ;
        this.StartingPointX = this.getStartingPointX();
        this.startingPointY = this.getStartingPointY();
        this.draw();
    }
    
    draw() {
        const length = this.selectedTetromino.length;
        for (let row = 0; row < length; row++) {
            for (let column = 0; column < length; column++) {
                if (this.selectedTetromino[row][column]) {
                    const x = (this.startingPointX + column + this.x) * this.squareSise;
                    const y = (this.startingPointY + row + this.y) * this.squareSise;
                    console.log(this.startingPointX);
                    this.drawSquare(this.context, x, y, this.squareSise, this.squareSise, this.color);
                }
            }
        }    
    }

    unDraw( previousTetromino = null) {
        const tetromino = previousTetromino || this.selectedTetromino;
        const length = tetromino.length;
        for (let row = 0; row < length; row++) {
            for (let column = 0; column < length; column++) {
                if (tetromino[row][column]) {
                    const x = (this.startingPointX + column + this.x) * this.squareSise;
                    const y = (this.startingPointY + row + this.y) * this.squareSise;
                    console.log(this.startingPointX);
                    this.drawSquare(this.context, x, y, this.squareSise, this.squareSise, 'black');
                }
            }
        }        
    }

    rotate() {
        const previousTetromino = this.selectedTetromino;
        this.index++;
        this.selectedTetromino = this.tetromino[(this.index % 4)];
        this.unDraw(previousTetromino);
        this.draw(); 
    }

    move() {

    }


}

export default Piece;