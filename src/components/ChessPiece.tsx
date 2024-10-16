//
// ChessPiece.tsx
//
// Created by Caleb on 2024-08-05
//

// Import libraries, hooks, and functions
import { PieceType } from '../types/PieceType';
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
        const { player, type } = playerPiece;
        if (player === Player.white) {
            switch (type) {
                case PieceType.king:
                    return whiteKing;
                case PieceType.queen:
                    return whiteQueen;
                case PieceType.bishop:
                    return whiteBishop;
                case PieceType.knight:
                    return whiteKnight;
                case PieceType.rook:
                    return whiteRook;
                case PieceType.pon:
                    return whitePon;
            }
        } else {
            switch (type) {
                case PieceType.king:
                    return blackKing;
                case PieceType.queen:
                    return blackQueen;
                case PieceType.bishop:
                    return blackBishop;
                case PieceType.knight:
                    return blackKnight;
                case PieceType.rook:
                    return blackRook;
                case PieceType.pon:
                    return blackPon;
            }
        }
    };

    return <img src={getPieceImage()} alt="" />;
};

export default ChessPiece;
