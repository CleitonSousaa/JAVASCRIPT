// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

function Solucao(bishop, pawn) {
    const bishopX = bishop[0].toUpperCase().charCodeAt() - 'A'.charCodeAt() + 1;
    const bishopY = parseInt(bishop[1]);

    const pawnX = pawn[0].toUpperCase().charCodeAt() - 'A'.charCodeAt() + 1;
    const pawnY = parseInt(pawn[1]);

    const deltaX = bishopX - pawnX;
    const deltaY = bishopY - pawnY;

    if ((deltaX === deltaY) || (deltaX === -deltaY)) {
        return true;
    } else {
        return false;
    }
}
