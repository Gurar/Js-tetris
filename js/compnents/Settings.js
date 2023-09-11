class Settings {
    constructor(_canvas) {
        this.canvas = _canvas;
        this.width = 800;
        this.height = 600;
        this.scale = 2;
        this.wallSize = 10;
        this.squareSise = 50;
        this.row = 20;
        this.col = 10;
        this.board = [];
    }

    init() {
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;
    }

    drawSquare(context, x, y, width, height, color) {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);    
    }

    generateBoard() {
        for (let row = 0; row < this.row; row++) {
            this.board[row] = [];
            for (let column = 0; column < this.col; column++) {
                this.board[row][column] = {
                    value: 0,
                    color: "red",
                }
            }
        }    
    }
}

export default Settings;