import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Header = ({ level }) => {
    const headings = [
        'Разминка',
        'Воробьиные',
        'Лесные птицы',
        'Певчие птицы',
        'Хищные птицы',
        'Морские птицы',
    ];
    return (
        <header>
            <div className="presentation">
                <img src="/assets/img/logo.svg" alt="logo" className="presentation__logo" />
                <h3 className="presentation__score">Score: 0</h3>
            </div>
            <ul className="selection">
                {headings.map((heading, index) => {
                    return (
                        <li
                            key={heading}
                            className={clsx('selection__item', level === index && 'active')}
                        >
                            {heading}
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};

Header.propTypes = {
    level: PropTypes.number.isRequired,
};

export default Header;
