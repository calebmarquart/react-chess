//
// MoveValidator.ts
//
// Created by Caleb on 2024-10-15
//

// Import libraries

// Import other content
import Bishop from '../models/Bishop';
import King from '../models/King';
import Knight from '../models/Knight';
import Piece from '../models/Piece';
import Pon from '../models/Pon';
import Queen from '../models/Queen';
import Rook from '../models/Rook';

// Types
import { Move } from '../types/Move';
import { PieceType } from '../types/PieceType';
import { Board } from '../types/Board';

export default class MoveValidator {
    private board: Board;
    private move: Move;

    constructor(board: Board, move: Move) {
        this.board = board;
        this.move = move;
    }

    public isLegal(): boolean {
        const square = this.board[this.move.from.row][this.move.from.col];

        if (!square) {
            return false;
        }

        const { player, type } = square;

        let piece: Piece;

        switch (type) {
            case PieceType.king:
                piece = new King(player);
                break;
            case PieceType.queen:
                piece = new Queen(player);
                break;
            case PieceType.bishop:
                piece = new Bishop(player);
                break;
            case PieceType.rook:
                piece = new Rook(player);
                break;
            case PieceType.knight:
                piece = new Knight(player);
                break;
            case PieceType.pon:
                piece = new Pon(player);
        }

        let validCapture = true;
        let validMove = true;
        let notOwnPlayer = true;

        notOwnPlayer = !this.isOwnPlayer();

        if (this.isFree()) {
            validMove = piece.isValidMove(this.move);
        }

        if (this.isCapture()) {
            validCapture = piece.isValidCapture(this.move);
        }

        return validCapture && validMove && notOwnPlayer;
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
}
