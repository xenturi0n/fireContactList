import React, {Component} from 'react';

import * as contactsActions from '../flux/contactsActions.js';
import ContactStore from '../flux/contactsStore.js';

import AddForm from './AddForm.jsx';

class App extends Component{
    constructor(){
        super();
        this.state= ContactStore.getState();
    }

    coponentWillMount(){
        ContactStore.on('change', this._handleContactStoreChange.bind(this));
    }
    componentWillUnmount(){
        ContactStore.removeListener('change', this._handleContactStoreChange.bind(this));
    }

    _handleContactStoreChange(){
        this.setState(ContactStore.getState());
    }

    render(){
        return(
            <div className="well">
                <AddForm />
            </div>
        );
    }
}

export default App;