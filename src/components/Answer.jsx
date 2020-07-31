import React from 'react';
import PropTypes from 'prop-types';
import { Media, Player, controls } from 'react-media-player';
import PlayPause from './PlayPause';

const { Volume, SeekBar, CurrentTime, Duration } = controls;

const Answer = ({ bird, sidePanel }) => {
    return (
        <>
            <img
                className="quiz__answer-image"
                src={Object.keys(bird).length ? bird.image : '/assets/img/start-bird.jpg'}
                alt="start-bird"
            />
            <div className="quiz__answer-example">
                <div className="name">{Object.keys(bird).length ? bird.name : '******'}</div>
                {sidePanel && Object.keys(bird).length && (
                    <div className="species">{bird.species}</div>
                )}
                <div className="sound">
                    <Media>
                        <div className="media">
                            <Player src={bird.audio} />
                            <div className="media-controls">
                                <div className="play">
                                    <PlayPause className="media-control media-control--play-pause" />
                                    <SeekBar className="media-control media-control--seekbar" />
                                </div>
                                <div className="controls">
                                    <div className="time">
                                        <CurrentTime className="media-control media-control--current-time" />
                                        <Duration className="media-control media-control--duration" />
                                    </div>
                                    <Volume className="media-control media-control--volume" />
                                </div>
                            </div>
                        </div>
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
};
Answer.defaultProps = {
    bird: {},
};

export default Answer;
