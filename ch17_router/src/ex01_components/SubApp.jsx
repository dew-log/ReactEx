// npm install react-router-dom 설치

import Contact from 'react';
import Home from './Home';
import Topics from './Topics';

const SubApp = () => {
    return (
        <div>
            <h2>SubApp</h2>
            <Home />
            <Topics />
            <Contact />
        </div>
    );
}

export default SubApp;