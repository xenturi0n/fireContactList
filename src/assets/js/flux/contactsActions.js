import ContactsConstants from './contactsConstants.js';
import ContactsDispatcher from './contactsDispatcher.js';
import * as ContactsAPI from './contactsAPI.js';

export function nameFieldChanged(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.NAME_FIELD_CHANGED,
        value: value
    });
}

export function phoneFieldChanged(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.PHONE_FIELD_CHANGED,
        value: value
    });
}

export function emailFieldChanged(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.EMAIL_FIELD_CHANGED,
        value: value
    });
}

export function saveNewContact(contact){
    console.log("Actions contacto recibido ->", contact);
    ContactsAPI.saveNewContact(contact);
    //call to firebase API
}