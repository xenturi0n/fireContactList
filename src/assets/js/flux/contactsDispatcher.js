import {Dispatcher} from 'flux';

class ContactsDispatcher extends Dispatcher{
    dispatch(action){
        console.log("Despachando", action);
        super.dispatch(action);
    }
}

const contactsDispatcher = new ContactsDispatcher();

export default contactsDispatcher;