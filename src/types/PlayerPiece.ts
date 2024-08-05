//
// PlayerPiece.ts
//
// Created by Caleb on 2024-08-05
//

import { Piece } from './Piece';
import { Player } from './Player';

export interface PlayerPiece {
    piece: Piece;
    player: Player;
}
