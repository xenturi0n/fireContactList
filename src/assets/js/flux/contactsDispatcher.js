import {Dispatcher} from 'flux';

class ContactsDispatcher extends Dispatcher{
    dispatch(action={}){
        super.dispatch(action);
    }
}

export default new ContactsDispatcher();