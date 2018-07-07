import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route} from 'react-router-dom';

import { Traverse } from './array/traverse/Traverse';

export class SubComponent extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center Data-title"><FontAwesomeIcon id="up" icon="angle-double-up" /> React Data Structure <FontAwesomeIcon id="down" icon="angle-double-down" /></h3>
                </div>
                <Route exact path="/array/traverse" component={ Traverse } />
            </div>
        );
    }
}