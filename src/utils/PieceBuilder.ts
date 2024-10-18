//
// PieceBuilder.ts
//
// Created by Caleb on 2024-10-17
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

// Improt types
import { PieceType } from '../types/PieceType';
import { Player } from '../types/Player';

export default class PieceBuilder {
    static build(type: PieceType, player: Player): Piece {
        switch (type) {
            case PieceType.king:
                return new King(player);
            case PieceType.queen:
                return new Queen(player);
            case PieceType.bishop:
                return new Bishop(player);
            case PieceType.rook:
                return new Rook(player);
            case PieceType.knight:
                return new Knight(player);
            case PieceType.pon:
                return new Pon(player);
        }
    }
}
