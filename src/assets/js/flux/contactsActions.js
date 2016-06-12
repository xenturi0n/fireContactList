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
    ContactsAPI.saveNewContact(contact);
    ContactsDispatcher.dispatch({
        type: ContactsConstants.NEW_CONTACT_SAVED,
        contact: contact
    });
}

export function saveContactEdits(contact){
    ContactsAPI.saveContactEdits(contact);
    ContactsDispatcher.dispatch({
        type: ContactsConstants.EDIT_CONTACT_SAVED,
        contact: contact
    });
}
export function updateContactsList(newContacts){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.UPDATE_CONTACTS_LIST,
        contacts: newContacts
    });
}

export function deleteContact(id){
    ContactsAPI.deleteContact(id);
    ContactsDispatcher.dispatch({
        type: ContactsConstants.DELETED_CONTACT,
        id: id
    });
}

export function editContact(id){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.EDITING_CONTACT,
        id: id
    });
}


export function nameEditFieldChanged(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.NAME_EDIT_FIELD_CHANGED,
        value: value
    });
}
export function emailEditFieldChanged(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.EMAIL_EDIT_FIELD_CHANGED,
        value: value
    });
}
export function phoneEditFieldChanged(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.PHONE_EDIT_FIELD_CHANGED,
        value: value
    });
}

export function cancelContactEdits(value){
    ContactsDispatcher.dispatch({
        type: ContactsConstants.CANCEL_CONTACT_EDITION,
        value: value
    });
}