//
// PlayerPiece.ts
//
// Created by Caleb on 2024-08-05
//

import { PieceType } from './PieceType';
import { Player } from './Player';

export interface PlayerPiece {
    type: PieceType;
    player: Player;
}
