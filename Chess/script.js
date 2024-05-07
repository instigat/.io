document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const pieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']; // Unicode characters for chess pieces
    let selectedPiece = null;

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

                // Add click event listener to cells
                cell.addEventListener('click', function() {
                    cellClicked(i, j);
                });

                board.appendChild(cell);
            }
        }
    }

    // Add pieces to the board
    function addPieces() {
        for (let i = 0; i < 8; i++) {
            const pawn = createPiece('♙', 1, i); // White pawn
            board.children[i + 8].appendChild(pawn);
    
            const piece = createPiece(pieces[i], 0, i); // White piece
            board.children[i].appendChild(piece);
    
            const blackPawn = createPiece('♟', 6, i); // Black pawn
            board.children[6 * 8 + i].appendChild(blackPawn);
    
            const blackPiece = createPiece(pieces[i].toLowerCase(), 7, i); // Black piece
            board.children[7 * 8 + i].appendChild(blackPiece);
        }
    }

    // Create a piece element with appropriate content (emoji)
    function createPiece(pieceContent) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.textContent = pieceContent; // Use emoji as text content
        piece.setAttribute('draggable', 'true'); // Make piece draggable
        piece.addEventListener('dragstart', dragStart);
        return piece;
    }

    // Handle click on cell
    function cellClicked(row, col) {
        const cellIndex = row * 8 + col;
        const selectedCell = board.children[cellIndex];
    
        if (selectedPiece) {
            // Move the selected piece to the clicked cell if the move is valid
            if (isValidMove(selectedPiece, selectedPiece.row, selectedPiece.col, row, col)) {
                selectedCell.appendChild(selectedPiece);
                selectedPiece.row = row;
                selectedPiece.col = col;
            }
            selectedPiece = null;
        } else {
            // Select the piece in the clicked cell
            const piece = selectedCell.querySelector('.piece');
            if (piece) {
                selectedPiece = piece;
                selectedPiece.row = row;
                selectedPiece.col = col;
            }
        }
    }    

    // Handle drag start for piece
    function dragStart(event) {
        selectedPiece = event.target;
    }
    // Example implementation of move validation, capturing pieces, and checking for checkmate

// Function to validate if a move is legal for a given piece
function isValidMove(piece, fromRow, fromCol, toRow, toCol) {
    // Implement logic to validate move for each type of piece
    // Example: return true if the move is legal, false otherwise
}

// Function to check if a player's king is in check
function isInCheck(playerColor) {
    // Implement logic to check if player's king is threatened by opponent's pieces
}

// Function to check if a player is in checkmate
function isCheckmate(playerColor) {
    // Check if player's king is in check
    if (!isInCheck(playerColor)) {
        return false; // Player is not in checkmate
    }

    // Check if any move can get the king out of check
    // If not, check if any of the opponent's pieces can legally capture the king
    // If not, it's checkmate
    // Implement this logic based on the rules of chess
}

// Function to move a piece on the board
// Function to move a piece on the board
function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol]; // Get the piece being moved
    const targetPiece = board[toRow][toCol]; // Get the piece on the target square

    // Check if the move is valid for the specific piece type
    let isValidMove = false;
    switch (piece.type) {
        case 'pawn':
            isValidMove = isValidPawnMove(piece, fromRow, fromCol, toRow, toCol);
            break;
        case 'rook':
            isValidMove = isValidRookMove(piece, fromRow, fromCol, toRow, toCol);
            break;
        case 'knight':
            isValidMove = isValidKnightMove(piece, fromRow, fromCol, toRow, toCol);
            break;
        case 'bishop':
            isValidMove = isValidBishopMove(piece, fromRow, fromCol, toRow, toCol);
            break;
        case 'queen':
            isValidMove = isValidQueenMove(piece, fromRow, fromCol, toRow, toCol);
            break;
        case 'king':
            isValidMove = isValidKingMove(piece, fromRow, fromCol, toRow, toCol);
            break;
        default:
            break;
    }

    // Perform the move if it's valid
    if (isValidMove) {
        // Check if the target square is occupied by an opponent's piece
        if (targetPiece && targetPiece.color !== piece.color) {
            // Capture the opponent's piece
            capturePiece(toRow, toCol);
        }

        // Move the piece to the target square
        board[toRow][toCol] = piece;
        board[fromRow][fromCol] = null;

        // Update piece's position
        piece.row = toRow;
        piece.col = toCol;

        // Check for checkmate after the move
        if (isCheckmate(piece.color)) {
            // Checkmate has occurred, end the game
            // Implement game over logic here
        }
    }
}


// Function to capture a piece on the board
function capturePiece(row, col) {
    const piece = board[row][col];
    capturedPieces.push(piece); // Add the captured piece to the list of captured pieces
    board[row][col] = null; // Remove the piece from the board
}
// Function to validate if a move is legal for a pawn
function isValidPawnMove(piece, fromRow, fromCol, toRow, toCol) {
    const dy = toRow - fromRow;
    const dx = Math.abs(toCol - fromCol);

    // White pawns move forward (dy < 0)
    if (piece.color === 'white') {
        if (dy === -1 && dx === 0 && !board[toRow][toCol]) {
            return true; // Move one square forward
        }
        if (fromRow === 6 && dy === -2 && dx === 0 && !board[toRow][toCol] && !board[toRow + 1][toCol]) {
            return true; // Move two squares forward from starting position
        }
        if (dy === -1 && dx === 1 && board[toRow][toCol] && board[toRow][toCol].color === 'black') {
            return true; // Capture diagonally
        }
    }

    // Black pawns move forward (dy > 0)
    if (piece.color === 'black') {
        if (dy === 1 && dx === 0 && !board[toRow][toCol]) {
            return true; // Move one square forward
        }
        if (fromRow === 1 && dy === 2 && dx === 0 && !board[toRow][toCol] && !board[toRow - 1][toCol]) {
            return true; // Move two squares forward from starting position
        }
        if (dy === 1 && dx === 1 && board[toRow][toCol] && board[toRow][toCol].color === 'white') {
            return true; // Capture diagonally
        }
    }

    return false; // Move is not legal
}
// Function to validate if a move is legal for a rook
function isValidRookMove(piece, fromRow, fromCol, toRow, toCol) {
    // Check if the move is vertical or horizontal
    if (fromRow !== toRow && fromCol !== toCol) {
        return false; // Rook can only move vertically or horizontally
    }

    // Check if there are any pieces blocking the rook's path
    if (fromRow === toRow) {
        // Move is horizontal
        const minCol = Math.min(fromCol, toCol);
        const maxCol = Math.max(fromCol, toCol);
        for (let col = minCol + 1; col < maxCol; col++) {
            if (board[fromRow][col]) {
                return false; // Piece blocking the path
            }
        }
    } else {
        // Move is vertical
        const minRow = Math.min(fromRow, toRow);
        const maxRow = Math.max(fromRow, toRow);
        for (let row = minRow + 1; row < maxRow; row++) {
            if (board[row][fromCol]) {
                return false; // Piece blocking the path
            }
        }
    }

    // Check if the destination square is occupied by an opponent's piece
    if (board[toRow][toCol] && board[toRow][toCol].color !== piece.color) {
        return true; // Capture opponent's piece
    }

    // If the destination square is empty, the move is legal
    return !board[toRow][toCol];
}
// Function to validate if a move is legal for a knight
function isValidKnightMove(piece, fromRow, fromCol, toRow, toCol) {
    const dy = Math.abs(toRow - fromRow);
    const dx = Math.abs(toCol - fromCol);

    // Knights move in an L-shape: two squares in one direction and one square perpendicular to that direction
    return (dy === 2 && dx === 1) || (dy === 1 && dx === 2);
}
// Function to validate if a move is legal for a queen
function isValidQueenMove(piece, fromRow, fromCol, toRow, toCol) {
    // Queen can move like a rook (vertical or horizontal) or like a bishop (diagonal)
    return isValidRookMove(piece, fromRow, fromCol, toRow, toCol) ||
           isValidBishopMove(piece, fromRow, fromCol, toRow, toCol);
}
// Function to validate if a move is legal for a king
function isValidKingMove(piece, fromRow, fromCol, toRow, toCol) {
    const dy = Math.abs(toRow - fromRow);
    const dx = Math.abs(toCol - fromCol);

    // King can move one square in any direction
    if ((dy === 1 && dx === 0) || (dy === 0 && dx === 1) || (dy === 1 && dx === 1)) {
        return true;
    }

    // Castling: King can move two squares towards the rook and the rook moves to the square adjacent to the king
    if (piece.hasMoved === false && dy === 0 && Math.abs(toCol - fromCol) === 2) {
        // Check if there are no pieces between the king and the rook
        const rookCol = toCol > fromCol ? 7 : 0;
        const direction = toCol > fromCol ? 1 : -1;
        for (let col = fromCol + direction; col !== rookCol; col += direction) {
            if (board[fromRow][col]) {
                return false; // Piece blocking the path
            }
        }
        // Check if the rook has moved
        const rook = board[fromRow][rookCol];
        if (rook && rook.hasMoved === false) {
            return true;
        }
    }

    return false;
}


    createBoard();
    addPieces();
});
