import React, {Component} from 'react';

import * as contactsActions from '../flux/contactsActions.js';
import contactsStore from '../flux/contactsStore.js';

import AddForm from './AddForm.jsx';
import ContactsList from './ContactsList.jsx';


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
        this.setState(contactsStore.getState());
    }

    render(){

        return(
            <div>
                <div className="well">
                    <AddForm fields={this.state.addFormFields}/>                
                </div>
                <div className="well">
                    <ContactsList contacts={this.state.contacts}/>
                </div>
                
            </div>
        );
    }
}

export default App;