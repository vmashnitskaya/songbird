import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Header from './Header';
import Answer from './Answer';
import StartPhrase from './StartPhrase';
import birdsData from '../birdsData';
import './SongBird.scss';

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

    useEffect(() => {
        setLevel(0);
        setLevelData(shuffle(birdsData[0].slice(0)));
        setSecretBird(birdsData[0][randomNumber()]);
        setGuessedBird({});
        setGuessedArray([]);
    }, []);

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
                    <Answer sidePanel={false} />
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
                <button type="button">Next level</button>
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
