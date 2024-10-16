//
// Pon.ts
//
// Created by Caleb on 2024-10-15
//

import { Move } from '../types/Move';
import { Player } from '../types/Player';
import Piece from './Piece';

// Import libraries

// Import other content

// Configuration

export default class Pon extends Piece {
    constructor(player: Player) {
        super(player);
    }

    isValidMove(move: Move): boolean {
        const colDiff = Math.abs(move.from.col - move.to.col);

        if (colDiff !== 0) {
            return false; // moving diagonal
        }

        if (this.player === Player.black) {
            // Black player can only decrease in column
            const spaces = move.to.row - move.from.row;

            if (spaces <= 0) {
                return false;
            }

            if (move.from.row === 1) {
                // Starting row can move x2
                return spaces <= 2;
            } else {
                // Other row can only move x1
                return spaces <= 1;
            }
        } else {
            // White player can only increase in column
            const spaces = move.from.row - move.to.row;

            if (spaces <= 0) {
                return false;
            }

            if (move.from.row === 6) {
                // Starting row can move x2
                return spaces <= 2;
            } else {
                // Other row can only move x1
                return spaces <= 1;
            }
        }
    }

    isValidCapture(move: Move): boolean {
        const colDif = Math.abs(move.from.col - move.to.col);

        if (this.player === Player.black) {
            // Black player can only increase in row
            const spaces = move.to.row - move.from.row;

            return spaces === 1 && colDif === 1;
        } else {
            // White player can only decrease in row
            const spaces = move.from.row - move.to.row;

            return spaces === 1 && colDif === 1;
        }
    }
}
