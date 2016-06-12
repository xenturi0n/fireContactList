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
            contacts: [],
            editContactFields:{
                name: 'test',
                phone: 'test',
                email: 'test',
                isEditing: false
            }
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
    getRawEditContactFields(){
        return this.state.editContactFields;
    }
    getCleanEditContactFields(){
        return {
            name: utils.allTrim(this.state.editContactFields.name),
            phone: utils.allTrim(this.state.editContactFields.phone),
            email: utils.allTrim(this.state.editContactFields.email),
            id: this.state.editContactFields.id
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
                break;

            case ContactsConstants.EDITING_CONTACT:
                this.state.editContactFields.isEditing=true;
                const index = this.state.contacts.findIndex((contact, i, array)=>{
                    return contact.id==action.id;
                });
                this.state.editContactFields=Object.assign(this.state.editContactFields,this.state.contacts
                [index]);
                this.emit('change');
                break;

            case ContactsConstants.NAME_EDIT_FIELD_CHANGED:
                this.state.editContactFields.name=action.value;
                this.emit('change');
                break;

            case ContactsConstants.EMAIL_EDIT_FIELD_CHANGED:
                this.state.editContactFields.email=action.value;
                this.emit('change');
                break;

            case ContactsConstants.PHONE_EDIT_FIELD_CHANGED:
                this.state.editContactFields.phone=action.value;
                this.emit('change');
                break;

            case ContactsConstants.CANCEL_CONTACT_EDITION:
                this.state.editContactFields=Object.assign({},{isEditing: false});
                this.emit('change');
                break;

            case ContactsConstants.EDIT_CONTACT_SAVED:
                this.state.editContactFields=Object.assign({},{isEditing: false});
                this.emit('change');
                break;                 
        }
    }
}

const contactsStore = new ContactsStore;
ContactsDispatcher.register(contactsStore.handleActions.bind(contactsStore));

export default contactsStore;