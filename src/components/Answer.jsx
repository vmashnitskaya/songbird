import React from 'react';
import PropTypes from 'prop-types';

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
                <div className="sound" />
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
