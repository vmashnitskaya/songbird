import React from 'react';
import PropTypes from 'prop-types';
import { withMediaProps } from 'react-media-player';

const PlayPause = ({ media, className }) => {
    const handlePlayPause = () => {
        media.playPause();
    };

    return (
        <svg
            role="button"
            width="36px"
            height="36px"
            viewBox="0 0 36 36"
            className={className}
            onClick={handlePlayPause}
        >
            <circle fill="#303030" cx="18" cy="18" r="18" />
            {media.isPlaying && (
                <g key="pause" style={{ transformOrigin: '0% 50%' }}>
                    <rect x="12" y="11" fill="#0c9975" width="4" height="14" />
                    <rect x="20" y="11" fill="#0c9975" width="4" height="14" />
                </g>
            )}
            {!media.isPlaying && (
                <polygon
                    key="play"
                    fill="#0c9975"
                    points="14,11 26,18 14,25"
                    style={{ transformOrigin: '100% 50%' }}
                />
            )}
        </svg>
    );
};

PlayPause.propTypes = {
    className: PropTypes.string.isRequired,
    media: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default withMediaProps(PlayPause);
