//
// useBoard.ts
//
// Created by Caleb on 2024-08-05
//

// Import libraries

// Import other content

// Configuration

import { useState } from 'react';
import { Piece } from '../types/Piece';
import { Player } from '../types/Player';
import { Move } from '../types/Move';
import { Position } from '../types/Position';
import { PlayerPiece } from '../types/PlayerPiece';

const initialBoard: Array<PlayerPiece | null>[] = [
    [
        {
            piece: Piece.rook,
            player: Player.black,
        },
        {
            piece: Piece.knight,
            player: Player.black,
        },
        {
            piece: Piece.bishop,
            player: Player.black,
        },
        {
            piece: Piece.queen,
            player: Player.black,
        },
        {
            piece: Piece.king,
            player: Player.black,
        },
        {
            piece: Piece.bishop,
            player: Player.black,
        },

        {
            piece: Piece.knight,
            player: Player.black,
        },

        {
            piece: Piece.rook,
            player: Player.black,
        },
    ],
    [
        {
            piece: Piece.pon,
            player: Player.black,
        },
        {
            piece: Piece.pon,
            player: Player.black,
        },
        {
            piece: Piece.pon,
            player: Player.black,
        },

        {
            piece: Piece.pon,
            player: Player.black,
        },
        {
            piece: Piece.pon,
            player: Player.black,
        },

        {
            piece: Piece.pon,
            player: Player.black,
        },
        {
            piece: Piece.pon,
            player: Player.black,
        },

        {
            piece: Piece.pon,
            player: Player.black,
        },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
        {
            piece: Piece.pon,
            player: Player.white,
        },
    ],
    [
        {
            piece: Piece.rook,
            player: Player.white,
        },

        {
            piece: Piece.knight,
            player: Player.white,
        },

        {
            piece: Piece.bishop,
            player: Player.white,
        },

        {
            piece: Piece.queen,
            player: Player.white,
        },
        {
            piece: Piece.king,
            player: Player.white,
        },
        {
            piece: Piece.bishop,
            player: Player.white,
        },
        {
            piece: Piece.knight,
            player: Player.white,
        },
        {
            piece: Piece.rook,
            player: Player.white,
        },
    ],
];

const useBoard = () => {
    const [board, setBoard] = useState(initialBoard);
    const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);

    const selectSquare = (position: Position) => {
        if (selectedSquare) {
            // Try to move the piece
            const newMove: Move = {
                fromRow: selectedSquare.row,
                fromCol: selectedSquare.col,
                toRow: position.row,
                toCol: position.col,
            };

            movePiece(newMove);
            setSelectedSquare(null);
        } else {
            // Select a piece
            setSelectedSquare(position);
        }
    };

    const movePiece = (move: Move) => {
        if (move.fromRow === move.toRow && move.fromCol === move.toCol) {
            return;
        }

        const newBoard = board.map((rowArray) => rowArray.slice());
        const fromPiece = newBoard[move.fromRow][move.fromCol];

        newBoard[move.toRow][move.toCol] = fromPiece
            ? {
                  ...fromPiece,
              }
            : null;

        newBoard[move.fromRow][move.fromCol] = null;
        setBoard(newBoard);
    };

    return {
        board,
        selectedSquare,
        selectSquare,
    };
};

export default useBoard;
