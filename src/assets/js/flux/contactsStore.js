import ContactsConstants from './contactsConstants.js';
import * as ContactsAPI from './contactsAPI.js';
import ContactsDispatcher from './contactsDispatcher.js';
import {EventEmitter} from 'events';
import * as utils from './utils';

class ContactsStore extends EventEmitter{
    constructor(){
        super();
        this.state={
            addFormFields:{
                name: '',
                phone: '',
                email: ''
            },
            contacts: []
        };
    }

    getState(){
        return this.state;
    }
    getRawAddFormFields(){
        return this.state.addFormFields;
    }
    getCleanAddFormFields(){
        return {
            name: utils.allTrim(this.state.addFormFields.name),
            phone: utils.allTrim(this.state.addFormFields.phone),
            email: utils.allTrim(this.state.addFormFields.email)
        }
    }

    saveContact(){
        console.log("Saving new Contact....");
        const contact={
            name: this.state.addFormFields.name.trim(),
            phone: this.state.addFormFields.phone.trim(),
            email: this.state.addFormFields.email.trim()
        }

        this.state.contacts.push(contact);
    }

    handleActions(action){
        console.log("Action recibida en Store -> action=", action);
        switch(action.type){

            case ContactsConstants.NAME_FIELD_CHANGED:  
                this.state.addFormFields.name=action.value;
                console.log("Store emitiendo name changed -> this.state=", this.state);
                this.emit('change');
                break;

            case ContactsConstants.PHONE_FIELD_CHANGED:
                this.state.addFormFields.phone=action.value;
                this.emit('change');
                break;

            case ContactsConstants.EMAIL_FIELD_CHANGED:
                this.state.addFormFields.email=action.value;
                this.emit('change');
                break;

            case ContactsConstants.SAVE_NEW_CONTACT:
                this.saveContact();
                this.emit('change');
                break;            
        }
    }
}

const contactsStore = new ContactsStore;
ContactsDispatcher.register(contactsStore.handleActions.bind(contactsStore));

export default contactsStore;