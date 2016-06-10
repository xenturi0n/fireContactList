import 'whatwg-fetch';
import * as ContactsActions from './contactsActions.js';
import ContactsConstants from './contactsConstants.js';

import Firebase from 'firebase';

// console.log(Firebase); 

const config = {
    apiKey: "AIzaSyBBX0nuXb4qEHMYJwlAzhcHJwG8lb59xcg",
    authDomain: "firecontactslist.firebaseapp.com",
    databaseURL: "https://firecontactslist.firebaseio.com",
    storageBucket: "firecontactslist.appspot.com",
  };

Firebase.initializeApp(config);

const rootRef = firebase.database().ref();
const Database = Firebase.database();

export function saveNewContact(contact){
    Database.ref('contacts/').push(contact);
}