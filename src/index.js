import React from 'react';
import {createRoot} from 'react-dom/client';
import MyNote from './components/MyNote'

// import style
// import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<MyNote />);