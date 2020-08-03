import React from 'react';
import PropTypes from 'prop-types';
import './GameEnd.scss';

const GameEnd = ({ score, handleNewGame }) => {
    return (
        <div className="game-end">
            <h1>Поздравляем!</h1>
            {score === 30 ? (
                <h2>Абсолютная победа: 30 из 30 баллов.</h2>
            ) : (
                <h2>Вы прошли викторину и набрали {score} из 30 возможных баллов</h2>
            )}

            <hr />
            <button className="end-button" type="button" onClick={handleNewGame}>
                Попробовать еще раз!
            </button>
        </div>
    );
};

GameEnd.propTypes = {
    score: PropTypes.number.isRequired,
    handleNewGame: PropTypes.func.isRequired,
};

export default GameEnd;
