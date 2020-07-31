import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Header from './Header';
import Answer from './Answer';
import StartPhrase from './StartPhrase';
import birdsData from '../birdsData';
import './SongBird.scss';

const MAX_LEVEL = 6;

const SongBird = () => {
    const [level, setLevel] = useState(0);
    const [levelData, setLevelData] = useState([]);
    const [secretBird, setSecretBird] = useState({});
    const [guessedBird, setGuessedBird] = useState({});
    const [correctAnswerProvided, setCorrectAnswerProvided] = useState(false);
    const [guessedArray, setGuessedArray] = useState([]);

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
                console.log('win');
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
        setLevel(0);
        clearData();
    }, []);

    useEffect(() => {
        clearData();
    }, [level]);

    const handleAnswerProvided = (event) => {
        const { bird } = event.target.dataset;
        setGuessedBird(levelData.filter((element) => element.name === bird)[0]);

        if (!correctAnswerProvided && event.target.dataset.bird === secretBird.name) {
            setCorrectAnswerProvided(true);
            winPlay.current.pause();
            winPlay.current.currentTime = 0;
            winPlay.current.play();
        } else if (!correctAnswerProvided) {
            setGuessedBird(levelData.filter((element) => element.name === bird)[0]);
            setCorrectAnswerProvided(false);
            setGuessedArray((prevState) => [...prevState, bird]);
            errorPlay.current.pause();
            errorPlay.current.currentTime = 0;
            errorPlay.current.play();
        }
    };

    return (
        <>
            <Header level={level} />
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
                    Next level
                </button>
            </main>
            <audio ref={winPlay} src="/assets/audio/win.mp3" type="audio/mpeg">
                <track kind="captions" />
            </audio>
            <audio ref={errorPlay} src="/assets/audio/error.mp3" type="audio/mpeg">
                <track kind="captions" />
            </audio>
            <footer />
        </>
    );
};

export default SongBird;
