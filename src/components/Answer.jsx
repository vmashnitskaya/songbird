import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'react-media-player';
import MediaPlayer from './MediaPlayer';

const Answer = ({ bird, sidePanel, correctAnswerProvided }) => {
    return (
        <>
            <img
                className="quiz__answer-image"
                src={
                    !correctAnswerProvided && !sidePanel ? '/assets/img/start-bird.jpg' : bird.image
                }
                alt="bird"
            />
            <div className="quiz__answer-example">
                <div className="name">
                    {!correctAnswerProvided && !sidePanel ? '******' : bird.name}
                </div>
                {sidePanel && Object.keys(bird).length && (
                    <div className="species">{bird.species}</div>
                )}
                <div className="sound">
                    <Media>
                        <MediaPlayer
                            bird={bird}
                            sidePanel={sidePanel}
                            correctAnswerProvided={correctAnswerProvided}
                        />
                    </Media>
                </div>
            </div>
        </>
    );
};

Answer.propTypes = {
    bird: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        species: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        audio: PropTypes.string,
    }),
    sidePanel: PropTypes.bool.isRequired,
    correctAnswerProvided: PropTypes.bool,
};
Answer.defaultProps = {
    bird: {},
    correctAnswerProvided: false,
};
export default Answer;
