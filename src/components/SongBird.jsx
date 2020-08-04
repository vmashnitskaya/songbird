import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Header from './Header';
import Answer from './Answer';
import StartPhrase from './StartPhrase';
import birdsData from '../birdsData';
import GameEnd from './GameEnd';
import './SongBird.scss';

const MAX_LEVEL = 5;
const MAX_SCORE = 5;

const SongBird = () => {
    const [level, setLevel] = useState(0);
    const [levelData, setLevelData] = useState([]);
    const [secretBird, setSecretBird] = useState({});
    const [guessedBird, setGuessedBird] = useState({});
    const [correctAnswerProvided, setCorrectAnswerProvided] = useState(false);
    const [guessedArray, setGuessedArray] = useState([]);
    const [score, setScore] = useState(0);
    const [isGameEnded, setIsGameEnded] = useState(false);

    const winPlay = useRef();
    const errorPlay = useRef();

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const randomNumber = () => {
        return Math.floor(Math.random() * 6);
    };

    const handleNewLevel = () => {
        if (correctAnswerProvided) {
            if (level < MAX_LEVEL) {
                setLevel(level + 1);
            } else {
                setIsGameEnded(true);
            }
        }
    };

    const clearData = () => {
        setLevelData(shuffle(birdsData[level].slice(0)));
        setSecretBird(birdsData[level][randomNumber()]);
        setGuessedBird({});
        setGuessedArray([]);
        setCorrectAnswerProvided(false);
    };

    useEffect(() => {
        if (Object.keys(secretBird).length) {
            console.log(`Correct answer for level ${level + 1} is ${secretBird.name}`);
        }
    }, [secretBird]);

    useEffect(() => {
        setLevel(0);
        setScore(0);
        clearData();
    }, []);

    useEffect(() => {
        clearData();
    }, [level]);

    const increaseScore = () => {
        if (guessedArray.length === 0) {
            setScore(score + 5);
        } else if (guessedArray.length === 6) {
            setScore(score + 0);
        } else {
            setScore(score + MAX_SCORE - guessedArray.length);
        }
    };

    const handleAnswerProvided = (event) => {
        const { bird } = event.target.dataset;
        setGuessedBird(levelData.filter((element) => element.name === bird)[0]);

        if (!correctAnswerProvided && event.target.dataset.bird === secretBird.name) {
            setCorrectAnswerProvided(true);
            winPlay.current.pause();
            winPlay.current.currentTime = 0;
            winPlay.current.play();
            increaseScore();
        } else if (!correctAnswerProvided) {
            setCorrectAnswerProvided(false);
            if (!guessedArray.includes(bird)) {
                setGuessedArray((prevState) => [...prevState, bird]);
            }
            errorPlay.current.pause();
            errorPlay.current.currentTime = 0;
            errorPlay.current.play();
        }
    };

    const handleNewGame = () => {
        setIsGameEnded(false);
        setLevel(0);
        setScore(0);
        clearData();
    };

    return (
        <>
            <Header level={level} score={score} />
            {isGameEnded ? (
                <GameEnd score={score} handleNewGame={handleNewGame} />
            ) : (
                <main className="quiz">
                    <div className="quiz__answer">
                        <Answer
                            bird={secretBird}
                            sidePanel={false}
                            correctAnswerProvided={correctAnswerProvided}
                        />
                    </div>
                    <div className="quiz__question">
                        <div className="quiz__question-selection">
                            <ul>
                                {levelData.length &&
                                    levelData.map((data) => {
                                        return (
                                            <li
                                                key={data.id}
                                                data-bird={data.name}
                                                onClick={handleAnswerProvided}
                                            >
                                                <span
                                                    className={clsx(
                                                        'indicator',
                                                        correctAnswerProvided &&
                                                            data.name === secretBird.name &&
                                                            'green',
                                                        guessedArray.includes(data.name) && 'red'
                                                    )}
                                                />
                                                {data.name}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>

                        <div className="quiz__question-example">
                            {Object.keys(guessedBird).length ? (
                                <>
                                    <div className="bird">
                                        <Answer bird={guessedBird} sidePanel />
                                    </div>

                                    <p className="description">{guessedBird.description}</p>
                                </>
                            ) : (
                                <StartPhrase />
                            )}
                        </div>
                    </div>
                    <button
                        type="button"
                        className={correctAnswerProvided ? 'next-level' : undefined}
                        onClick={handleNewLevel}
                    >
                        {level < 5 ? 'Next level' : 'Finish quiz'}
                    </button>
                    <audio ref={winPlay} src="/assets/audio/win.mp3" type="audio/mpeg">
                        <track kind="captions" />
                    </audio>
                    <audio ref={errorPlay} src="/assets/audio/error.mp3" type="audio/mpeg">
                        <track kind="captions" />
                    </audio>
                </main>
            )}
            <footer />
        </>
    );
};

export default SongBird;
