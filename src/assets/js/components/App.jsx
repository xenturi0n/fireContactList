import React, {Component} from 'react';

import * as contactsActions from '../flux/contactsActions.js';
import contactsStore from '../flux/contactsStore.js';

import AddForm from './AddForm.jsx';

class App extends Component{
    constructor(){
        super();
        this.state= contactsStore.getState();
    }

    componentWillMount(){
        contactsStore.on('change', this.handleContactsStoreChange.bind(this)); 
    }
    componentWillUnmount(){
        contactsStore.removeListener('change', this.handleContactsStoreChange.bind(this));
    }

    handleContactsStoreChange(){
        console.log('Evento Recibido');
        this.setState(contactsStore.getState());
    }

    render(){

        return(
            <div className="well">
                <AddForm fields={this.state.addFormFields}/>
            </div>
        );
    }
}

export default App;