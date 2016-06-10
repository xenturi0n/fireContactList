import {EventEmitter} from 'events';

import ContactsConstants from './ContactsConstants.js';
import * as ContactsAPI from './ContactsAPI.js';
import ContactsDispatcher from './ContactsDispatcher.js';


class ContactsStore extends EventEmitter{
    constructor(){
        super();
        this.state={};
    }

    getState(){
        return this.state;
    }

    handleActions(action){
        switch(action.type){

        }
    }
}

const contactsStore = new ContactsStore;

ContactsDispatcher.register(contactsStore.handleActions.bind(contactsStore));

export default contactsStore;