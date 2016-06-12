import 'whatwg-fetch';
import * as ContactsActions from './contactsActions.js';
import ContactsConstants from './contactsConstants.js';

import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBBX0nuXb4qEHMYJwlAzhcHJwG8lb59xcg",
    authDomain: "firecontactslist.firebaseapp.com",
    databaseURL: "https://firecontactslist.firebaseio.com",
    storageBucket: "firecontactslist.appspot.com",
  };

Firebase.initializeApp(config);

const rootRef = firebase.database().ref();
const Database = Firebase.database();

Database.ref('contacts/').on('value', (snapshot)=>{
    let newContacts = [];
    snapshot.forEach(key=>{
        newContacts.push(Object.assign(key.val().contact, {id: key.key}));
    });
    ContactsActions.updateContactsList(newContacts);
});

export function saveNewContact(contact){
    Database.ref('contacts/').push({contact: Object.assign(contact , {created: Date.now()})});
}

export function getContacts(){
    Database.ref('contacts/');
}

export function deleteContact(id){
    Database.ref(`contacts/${id}`).remove();
}

export function saveContactEdits(contact){
    Database.ref(`contacts/${contact.id}/contact`).update(contact);
}
