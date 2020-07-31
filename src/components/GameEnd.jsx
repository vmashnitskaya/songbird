import React from 'react';
import PropTypes from 'prop-types';
import './GameEnd.scss';

const GameEnd = ({ score, handleNewGame }) => {
    return (
        <div className="game-end">
            <h1>Thank you for the game! Your score is {score}.</h1>
            <button type="button" onClick={handleNewGame}>
                Start game
            </button>
        </div>
    );
};

GameEnd.propTypes = {
    score: PropTypes.number.isRequired,
    handleNewGame: PropTypes.func.isRequired,
};

export default GameEnd;
