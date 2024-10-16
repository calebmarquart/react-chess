//
// King.ts
//
// Created by Caleb on 2024-10-15
//

// Import libraries

// Import other content
import { Move } from '../types/Move';
import Piece from './Piece';

// Configuration

export default class King extends Piece {
    isValidMove(move: Move): boolean {
        const rowDiff = Math.abs(move.from.row - move.to.row);
        const colDiff = Math.abs(move.from.col - move.to.col);

        if (rowDiff > 1 || colDiff > 1) {
            return false;
        }

        return true;
    }

    isValidCapture(move: Move): boolean {
        return this.isValidMove(move);
    }
}
