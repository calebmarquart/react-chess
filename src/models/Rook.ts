//
// Rook.ts
//
// Created by Caleb on 2024-10-15
//

import { Move } from '../types/Move';
import Piece from './Piece';

// Import libraries

// Import other content

// Configuration

export default class Rook extends Piece {
    isValidMove(move: Move): boolean {
        const rowDiff = Math.abs(move.from.row - move.to.row);
        const colDiff = Math.abs(move.from.col - move.to.col);

        if (rowDiff === 0 || colDiff === 0) {
            return true; // either of the straight lines
        }

        return false; // invalid move
    }

    isValidCapture(move: Move): boolean {
        return this.isValidMove(move);
    }
}
