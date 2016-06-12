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
                <div className="row">
                    <div className="col-xs-12">
                        <AddForm fields={this.state.addFormFields}/> 
                    </div>
                </div>
                               
                <div className="row">
                    <div className="col-xs-12">
                        <ContactsList {...this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;