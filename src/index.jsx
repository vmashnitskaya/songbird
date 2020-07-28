import './style.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import React from 'react';
import SongBird from './components/SongBird';

ReactDOM.render(<SongBird />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
