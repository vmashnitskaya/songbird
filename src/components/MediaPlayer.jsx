import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Player, controls, withMediaProps } from 'react-media-player';
import PlayPause from './PlayPause';
import './MediaPlayer.scss';

const { Volume, SeekBar, CurrentTime, Duration } = controls;

const MediaPlayer = ({ bird, sidePanel, correctAnswerProvided, media }) => {
    const stoppedOnCorrectAnswer = useRef(false);

    useEffect(() => {
        stoppedOnCorrectAnswer.current = false;
    }, [bird]);

    useEffect(() => {
        if (!sidePanel && correctAnswerProvided && !stoppedOnCorrectAnswer.current) {
            try {
                media.stop();
                stoppedOnCorrectAnswer.current = true;
            } catch (e) {
                console.log(e.message);
            }
        }
    }, [correctAnswerProvided, sidePanel, media]);

    return (
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
    );
};

MediaPlayer.propTypes = {
    media: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.func])
    ).isRequired,
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

MediaPlayer.defaultProps = {
    bird: {},
    correctAnswerProvided: false,
};

export default withMediaProps(MediaPlayer);
