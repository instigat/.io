document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

    // Mapping of piece types to image URLs for both white and black pieces
    const pieceImages = {
        white: {
            pawn: 'images/white_pawn.png',
            rook: 'images/white_rook.png',
            knight: 'images/white_knight.png',
            bishop: 'images/white_bishop.png',
            queen: 'images/white_queen.png',
            king: 'images/white_king.png'
        },
        black: {
            pawn: 'images/black_pawn.png',
            rook: 'images/black_rook.png',
            knight: 'images/black_knight.png',
            bishop: 'images/black_bishop.png',
            queen: 'images/black_queen.png',
            king: 'images/black_king.png'
        }
    };

    // Create the chessboard
    function createBoard() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if ((i + j) % 2 === 1) {
                    cell.classList.add('black');
                }
                board.appendChild(cell);
            }
        }
    }

    // Add pieces to the board
    function addPieces() {
        for (let i = 0; i < 8; i++) {
            const pawn = createPiece('pawn', 'white');
            board.children[i + 8].appendChild(pawn);

            const piece = createPiece(pieces[i], 'white');
            board.children[i].appendChild(piece);

            const blackPawn = createPiece('pawn', 'black');
            board.children[6 * 8 + i].appendChild(blackPawn);

            const blackPiece = createPiece(pieces[i], 'black');
            board.children[7 * 8 + i].appendChild(blackPiece);
        }
    }

    // Create a piece element with appropriate background image
    function createPiece(pieceType, color) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundImage = `url('${pieceImages[color][pieceType]}')`;
        return piece;
    }

    createBoard();
    addPieces();
});
