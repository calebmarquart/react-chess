//
// Knight.ts
//
// Created by Caleb on 2024-10-15
//

import { Move } from '../types/Move';
import Piece from './Piece';

// Import libraries

// Import other content

// Configuration

export default class Knight extends Piece {
    isValidMove(move: Move): boolean {
        const rowDiff = Math.abs(move.from.row - move.to.row);
        const colDiff = Math.abs(move.from.col - move.to.col);

        if (rowDiff === 2 && colDiff === 1) {
            return true; // vertical L shape
        }

        if (rowDiff === 1 && colDiff === 2) {
            return true; // horizontal L shapre
        }

        return false; // invalid move
    }

    isValidCapture(move: Move): boolean {
        return this.isValidMove(move);
    }
}
