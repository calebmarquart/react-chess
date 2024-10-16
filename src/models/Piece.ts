//
// Piece.ts
//
// Created by Caleb on 2024-10-15
//

import { Move } from '../types/Move';
import { Player } from '../types/Player';

// Import libraries

// Import other content

// Configuration

export default abstract class Piece {
    protected player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    abstract isValidMove(move: Move): boolean;
    abstract isValidCapture(move: Move): boolean;
}
