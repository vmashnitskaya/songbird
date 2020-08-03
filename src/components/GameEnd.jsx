import React from 'react';
import PropTypes from 'prop-types';
import './GameEnd.scss';

const GameEnd = ({ score, handleNewGame }) => {
    return (
        <div className="game-end">
            <h1>Поздравляем!</h1>
            {score === 30 ? (
                <>
                    <h2>Абсолютная победа: 30 из 30 баллов.</h2>
                    <div className="bird-container bird-container--one">
                        <div className="bird-animation bird-animation--one" />
                    </div>

                    <div className="bird-container bird-container--two">
                        <div className="bird-animation bird-animation--two" />
                    </div>

                    <div className="bird-container bird-container--three">
                        <div className="bird-animation bird-animation--three" />
                    </div>

                    <div className="bird-container bird-container--four">
                        <div className="bird-animation bird-animation--four" />
                    </div>
                </>
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
