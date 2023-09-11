import Settings from "./Settings.js";

class Field extends Settings {
    constructor(_context) {
        super();
        this.context = _context;
        this.color = "white";
        this.startingPointX = ((this.width) / (this.squareSise / this.scale) - this.col) / 2;
        this.startingPointY = ((this.height) / (this.squareSise / this.scale) - this.row) / 2;
        
    }

    init() {
        this.generateBoard();
        this.drawWall();
        this.drawBoard();
    }

    drawWall () {
        const topWall = {
            x: this.startingPointX * this.squareSise - this.wallSize,
            y: this.startingPointY * this.squareSise - this.wallSize,
            width: this.squareSise * this.col + this.wallSize,
            height: this.wallSize 
        }

        const bottomWall = {
            x: this.startingPointX * this.squareSise,
            y: (this.startingPointY + this.row) * this.squareSise,
            width: this.squareSise * this.col + this.wallSize,
            height: this.wallSize
        }

        const leftWall = {
            x: this.startingPointX * this.squareSise - this.wallSize,
            y: this.startingPointY * this.squareSise,
            width: this.wallSize,
            height: this.squareSise * this.row + this.wallSize 
        }

        const rightWall = {
            x: (this.startingPointX + this.col) * this.squareSise,
            y: this.startingPointY * this.squareSise - this.wallSize,
            width: this.wallSize,
            height: this.squareSise * this.row + this.wallSize 
        }

        this.drawSquare(this.context, topWall.x, topWall.y, topWall.width, topWall.height, this.color);
        this.drawSquare(this.context, bottomWall.x, bottomWall.y, bottomWall.width, bottomWall.height, this.color);
        this.drawSquare(this.context, leftWall.x, leftWall.y, leftWall.width, leftWall.height, this.color);
        this.drawSquare(this.context, rightWall.x, rightWall.y, rightWall.width, rightWall.height);
    }

    drawBoard() {
        for (let row = 0; row < this.row; row++) {
            for (let column = 0; column < this.col; column++) {
                const color = this.board[row][column].color;
                const x = (this.startingPointX + column ) * this.squareSise;
                const y = (this.startingPointY + row ) * this.squareSise;
                this.drawSquare(this.context, x, y, this.squareSise, this.squareSise, color);
            }
        }    
    }
}

export default Field;