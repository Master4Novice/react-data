import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleDoubleDown,faAngleDoubleUp);
class App extends Component {
    render() {
        return (
            <div className="containers-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center Data-title"><FontAwesomeIcon id="up" icon="angle-double-up" /> React Data Structure <FontAwesomeIcon id="down" icon="angle-double-down" /></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
