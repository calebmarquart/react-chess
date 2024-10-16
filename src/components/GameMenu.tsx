//
// GameMenu.tsx
//
// Created by Caleb on 2024-10-15
//

import { Player } from '../types/Player';

// Import libraries, hooks, and functions

// Import components

// Import assets

// Import styles

// Import types

interface GameMenu {
    turnPlayer: Player;
    turnCount: number;
    onReset: () => void;
}

const GameMenu = ({ turnCount, turnPlayer, onReset }: GameMenu) => {
    return (
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <h1>React Chess</h1>
            <p>Turn Count: {turnCount}</p>
            <p>Player Turn: {turnPlayer}</p>
            <button onClick={onReset}>Reset Game</button>
        </div>
    );
};

export default GameMenu;
