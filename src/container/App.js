import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


import { Header } from '../components/header/Header';
import { SubComponent } from '../components/sub-components/SubComponent';

library.add(faAngleDoubleDown,faAngleDoubleUp);
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SubComponent />
            </div>
        );
    }
}

export default App;
