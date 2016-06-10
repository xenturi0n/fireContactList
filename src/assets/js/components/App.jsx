import React, {Component} from 'react';

import * as contactsActions from '../flux/contactsActions.js';
import ContactStore from '../flux/contactsStore.js';

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
        return(<div className="well"><h1>Hola mundo React</h1></div>);
    }
}

export default App;