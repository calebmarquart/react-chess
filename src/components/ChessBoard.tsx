//
// ChessBoard.tsx
//
// Created by Caleb on 2024-08-05
//

// Import libraries, hooks, and functions
import { Board } from '../types/Board';
import { Position } from '../types/Position';
import ChessPiece from './ChessPiece';

// Import components

// Import assets

// Import styles

interface ChessBoardProps {
    board: Board;
    selectedSquare: Position | null;
    selectSquare: (position: Position) => void;
}

const ChessBoard = ({
    board,
    selectSquare,
    selectedSquare,
}: ChessBoardProps) => {
    const rows = Array.from({ length: 8 }, (_, i) => i);
    const cols = Array.from({ length: 8 }, (_, i) => i);

    const isSelected = (position: Position) => {
        if (selectedSquare) {
            return (
                selectedSquare.row === position.row &&
                selectedSquare.col === position.col
            );
        } else {
            return false;
        }
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gridTemplateRows: 'repeat(8, 1fr)',
                width: '100vmin',
                height: '100vmin',
            }}
        >
            {rows.map((row) =>
                cols.map((col) => (
                    <div
                        key={`${row}-${col}`}
                        onClick={() => selectSquare({ row, col })}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:
                                (row + col) % 2 === 0 ? '#eee' : '#333',
                            border: isSelected({ row, col })
                                ? '3px solid yellow'
                                : 'none',
                        }}
                    >
                        {board[row][col] ? (
                            <ChessPiece playerPiece={board[row][col]} />
                        ) : (
                            <></>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default ChessBoard;
