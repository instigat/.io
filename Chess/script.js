document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const pieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']; // Unicode characters for chess pieces

    // Create the chessboard
    function createBoard() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');

                // Alternate the background color based on the row and column index
                if ((i + j) % 2 === 0) {
                    cell.classList.add('white');
                } else {
                    cell.classList.add('black');
                }

                board.appendChild(cell);
            }
        }
    }

    // Add pieces to the board
    function addPieces() {
        for (let i = 0; i < 8; i++) {
            const pawn = createPiece('♙'); // White pawn
            board.children[i + 8].appendChild(pawn);

            const piece = createPiece(pieces[i]); // White piece
            board.children[i].appendChild(piece);

            const blackPawn = createPiece('♟'); // Black pawn
            board.children[6 * 8 + i].appendChild(blackPawn);

            const blackPiece = createPiece(pieces[i].toLowerCase()); // Black piece
            board.children[7 * 8 + i].appendChild(blackPiece);
        }
    }

    // Create a piece element with appropriate content (emoji)
    function createPiece(pieceContent) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.textContent = pieceContent; // Use emoji as text content
        return piece;
    }

    createBoard();
    addPieces();
});
