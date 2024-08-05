//
// ChessPiece.tsx
//
// Created by Caleb on 2024-08-05
//

// Import libraries, hooks, and functions
import { Piece } from '../types/Piece';
import { Player } from '../types/Player';

// Import components

// Import assets
import blackKing from '../assets/pieces/blackKing.png';
import blackQueen from '../assets/pieces/blackQueen.png';
import blackBishop from '../assets/pieces/blackBishop.png';
import blackKnight from '../assets/pieces/blackKnight.png';
import blackRook from '../assets/pieces/blackRook.png';
import blackPon from '../assets/pieces/blackPon.png';
import whiteKing from '../assets/pieces/whiteKing.png';
import whiteQueen from '../assets/pieces/whiteQueen.png';
import whiteBishop from '../assets/pieces/whiteBishop.png';
import whiteKnight from '../assets/pieces/whiteKnight.png';
import whiteRook from '../assets/pieces/whiteRook.png';
import whitePon from '../assets/pieces/whitePon.png';
import { PlayerPiece } from '../types/PlayerPiece';

// Import styles

interface ChessPieceProps {
    playerPiece: PlayerPiece;
}

const ChessPiece = ({ playerPiece }: ChessPieceProps) => {
    const getPieceImage = () => {
        const { player, piece } = playerPiece;
        if (player === Player.white) {
            switch (piece) {
                case Piece.king:
                    return whiteKing;
                case Piece.queen:
                    return whiteQueen;
                case Piece.bishop:
                    return whiteBishop;
                case Piece.knight:
                    return whiteKnight;
                case Piece.rook:
                    return whiteRook;
                case Piece.pon:
                    return whitePon;
            }
        } else {
            switch (piece) {
                case Piece.king:
                    return blackKing;
                case Piece.queen:
                    return blackQueen;
                case Piece.bishop:
                    return blackBishop;
                case Piece.knight:
                    return blackKnight;
                case Piece.rook:
                    return blackRook;
                case Piece.pon:
                    return blackPon;
            }
        }
    };

    return <img src={getPieceImage()} alt="" />;
};

export default ChessPiece;
