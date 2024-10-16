//
// Game.tsx
//
// Created by Caleb on 2024-10-15
//

// Import libraries, hooks, and functions
import { useState } from 'react';
import MoveValidator from '../utils/MoveValidator';
import BoardBuilder from '../utils/BoardBuilder';

// Import components
import ChessBoard from './ChessBoard';
import GameMenu from './GameMenu';

// Import styles

// Import types
import { Player } from '../types/Player';
import { Board } from '../types/Board';
import { Move } from '../types/Move';
import { Position } from '../types/Position';

const Game = () => {
    const [turnCount, setTurnCount] = useState(0);
    const [turnPlayer, setTurnPlayer] = useState(Player.white);
    const [board, setBoard] = useState<Board>(BoardBuilder.build());
    const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);

    const selectSquare = (position: Position) => {
        if (selectedSquare) {
            // Try to move the piece
            const newMove: Move = {
                from: selectedSquare,
                to: position,
            };

            movePiece(newMove);
            setSelectedSquare(null);
        } else {
            // Check if the piece's player is their turn
            const square = board[position.row][position.col];
            if (square?.player === turnPlayer) {
                // Select a piece
                setSelectedSquare(position);
            }
        }
    };

    const movePiece = (move: Move) => {
        if (move.from.row === move.to.row && move.from.col === move.to.col) {
            return;
        }

        const validator = new MoveValidator(board, move);

        if (!validator.isLegal()) {
            return;
        }

        const newBoard = board.map((rowArray) => rowArray.slice());
        const fromPiece = newBoard[move.from.row][move.from.col];

        newBoard[move.to.row][move.to.col] = fromPiece
            ? {
                  ...fromPiece,
              }
            : null;

        newBoard[move.from.row][move.from.col] = null;
        setBoard(newBoard);

        setTurnCount((count) => count + 1);
        setTurnPlayer((current) =>
            current === Player.white ? Player.black : Player.white
        );
    };

    const onReset = () => {
        setTurnCount(0);
        setTurnPlayer(Player.white);
        setBoard(BoardBuilder.build());
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            <ChessBoard
                board={board}
                selectedSquare={selectedSquare}
                selectSquare={selectSquare}
            />
            <GameMenu
                turnCount={turnCount}
                turnPlayer={turnPlayer}
                onReset={onReset}
            />
        </div>
    );
};

export default Game;
