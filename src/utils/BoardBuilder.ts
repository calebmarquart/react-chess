//
// BoardBuilder.ts
//
// Created by Caleb on 2024-10-16
//

// Types
import { Board } from '../types/Board';
import { Player } from '../types/Player';
import { PlayerPiece } from '../types/PlayerPiece';
import { PieceType } from '../types/PieceType';

export default class BoardBuilder {
    static build(): Board {
        const rows: Board = [];

        // Row 0
        const blackPower: PlayerPiece[] = [
            {
                type: PieceType.rook,
                player: Player.black,
            },
            {
                type: PieceType.knight,
                player: Player.black,
            },
            {
                type: PieceType.bishop,
                player: Player.black,
            },
            {
                type: PieceType.queen,
                player: Player.black,
            },
            {
                type: PieceType.king,
                player: Player.black,
            },
            {
                type: PieceType.bishop,
                player: Player.black,
            },

            {
                type: PieceType.knight,
                player: Player.black,
            },

            {
                type: PieceType.rook,
                player: Player.black,
            },
        ];

        // Row 1
        const blackPons: PlayerPiece[] = Array.from({ length: 8 }, () => ({
            player: Player.black,
            type: PieceType.pon,
        }));

        // Row 2,3,4,5
        const emptyRow: null[] = Array.from({ length: 8 }, () => null);

        // Row 6
        const whitePons: PlayerPiece[] = Array.from({ length: 8 }, () => ({
            player: Player.white,
            type: PieceType.pon,
        }));

        // Row 7
        const whitePower: PlayerPiece[] = [
            {
                type: PieceType.rook,
                player: Player.white,
            },

            {
                type: PieceType.knight,
                player: Player.white,
            },

            {
                type: PieceType.bishop,
                player: Player.white,
            },

            {
                type: PieceType.queen,
                player: Player.white,
            },
            {
                type: PieceType.king,
                player: Player.white,
            },
            {
                type: PieceType.bishop,
                player: Player.white,
            },
            {
                type: PieceType.knight,
                player: Player.white,
            },
            {
                type: PieceType.rook,
                player: Player.white,
            },
        ];

        rows.push(
            blackPower,
            blackPons,
            emptyRow,
            emptyRow,
            emptyRow,
            emptyRow,
            whitePons,
            whitePower
        );

        return rows;
    }
}
