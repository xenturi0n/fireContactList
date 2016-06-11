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
        const contact={
            name: this.state.addFormFields.name.trim(),
            phone: this.state.addFormFields.phone.trim(),
            email: this.state.addFormFields.email.trim()
        }

        this.state.contacts.push(contact);
    }

    handleActions(action){
        switch(action.type){

            case ContactsConstants.NAME_FIELD_CHANGED:  
                this.state.addFormFields.name=action.value;
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

            case ContactsConstants.NEW_CONTACT_SAVED:
                this.state.addFormFields=Object.assign({},{
                    name: '',
                    phone: '',
                    email: ''
                });
                this.emit('change');
                break;

            case ContactsConstants.UPDATE_CONTACTS_LIST:
                this.state.contacts= action.contacts;
                this.emit('change');
                break;

            case ContactsConstants.DELETED_CONTACT:
                console.log("Contacto eliminado "+ action.id );
                break;
        }
    }
}

const contactsStore = new ContactsStore;
ContactsDispatcher.register(contactsStore.handleActions.bind(contactsStore));

export default contactsStore;