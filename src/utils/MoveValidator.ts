//
// MoveValidator.ts
//
// Created by Caleb on 2024-10-15
//

// Import libraries

// Import other content
import PieceBuilder from './PieceBuilder';

// Types
import { Move } from '../types/Move';
import { PieceType } from '../types/PieceType';
import { Board } from '../types/Board';
import { Position } from '../types/Position';
import { Player } from '../types/Player';

export default class MoveValidator {
    private board: Board;
    private move: Move;

    constructor(board: Board, move: Move) {
        this.board = board;
        this.move = move;
    }

    public isLegal(isCheck = false): boolean {
        const square = this.board[this.move.from.row][this.move.from.col];

        if (!square) {
            return false;
        }

        const { player, type } = square;

        const piece = PieceBuilder.build(type, player);

        let validCapture = true;
        let validMove = true;
        let notOwnPlayer = true;
        let pathIsClear = true;
        let putsKingInCheck = false;

        if (type !== PieceType.knight) {
            pathIsClear = this.isMovePathClear();
        }

        notOwnPlayer = !this.isOwnPlayer();

        // Check if the space to move to is free, if so check if valid move.
        if (this.isFree()) {
            validMove = piece.isValidMove(this.move);
        }

        // Check if the space is occupied as a capture, if so check if valid capture.
        if (this.isCapture()) {
            validCapture = piece.isValidCapture(this.move);
        }

        // Check if the move puts the king in check.
        if (!isCheck) {
            putsKingInCheck = this.putsKingInCheck();
        }

        return (
            validCapture &&
            validMove &&
            notOwnPlayer &&
            pathIsClear &&
            !putsKingInCheck
        );
    }

    private isCapture(): boolean {
        const fromSquare = this.board[this.move.from.row][this.move.from.col];
        const toSquare = this.board[this.move.to.row][this.move.to.col];

        if (fromSquare && toSquare) {
            return true;
        } else {
            return false; // not a capture
        }
    }

    private isFree(): boolean {
        return !this.board[this.move.to.row][this.move.to.col];
    }

    private isOwnPlayer(): boolean {
        const fromSquare = this.board[this.move.from.row][this.move.from.col];
        const toSquare = this.board[this.move.to.row][this.move.to.col];

        if (fromSquare && toSquare) {
            return fromSquare.player === toSquare.player; // is own player
        } else {
            return false; // not own player
        }
    }

    private isMovePathClear(): boolean {
        const rowDiff = this.move.to.row - this.move.from.row;
        const colDiff = this.move.to.col - this.move.from.col;

        const rowStep = Math.sign(rowDiff);
        const colStep = Math.sign(colDiff);

        if (Math.abs(rowDiff) <= 1 && Math.abs(colDiff) <= 1) {
            // 1 or less space, so the path is clear
            return true;
        }

        let currentRow = this.move.from.row + rowStep;
        let currentCol = this.move.from.col + colStep;

        const endRow = this.move.to.row;
        const endCol = this.move.to.col;

        while (currentRow !== endRow || currentCol !== endCol) {
            if (this.board[currentRow][currentCol] !== null) {
                return false; // Path is blocked
            }

            // Move to the next square in the path
            currentRow += rowStep;
            currentCol += colStep;
        }

        return true; // Path is clear
    }

    private putsKingInCheck(): boolean {
        const boardCopy = this.board.map((row) => row.slice());

        // Temporarily move the piece
        const movedPiece = boardCopy[this.move.from.row][this.move.from.col];

        if (!movedPiece) {
            return false;
        }

        boardCopy[this.move.to.row][this.move.to.col] = movedPiece;
        boardCopy[this.move.from.row][this.move.from.col] = null;

        const kingsPosition = this.findKing(movedPiece.player);

        for (let rowNum = 0; rowNum < boardCopy.length; rowNum++) {
            const row = boardCopy[rowNum];
            for (let colNum = 0; colNum < row.length; colNum++) {
                const pos = row[colNum];
                if (pos && pos.player !== movedPiece.player) {
                    // Check if the opposing piece can make a valid move there.
                    const checkMove: Move = {
                        from: {
                            row: rowNum,
                            col: colNum,
                        },
                        to: kingsPosition,
                    };

                    const moveValidator = new MoveValidator(
                        boardCopy,
                        checkMove
                    );
                    const isCheckMoveLegal = moveValidator.isLegal(true);

                    if (isCheckMoveLegal) {
                        return true; // Early return if the move puts the king in check
                    }
                }
            }
        }

        return false; // No moves put the king in check
    }

    private findKing(player: Player): Position {
        for (let rowNum = 0; rowNum < this.board.length; rowNum++) {
            const row = this.board[rowNum];
            for (let colNum = 0; colNum < row.length; colNum++) {
                const pos = row[colNum];
                if (
                    pos &&
                    pos.player === player &&
                    pos.type === PieceType.king
                ) {
                    return {
                        row: rowNum,
                        col: colNum,
                    };
                }
            }
        }
        throw new Error(`Could not find the ${player} king`);
    }
}
