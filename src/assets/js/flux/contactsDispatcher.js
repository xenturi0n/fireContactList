import {Dispatcher} from 'flux';

class ContactsDispatcher extends Dispatcher{
    dispatch(action={}){
        console.log("Despachando ->", action);
        super.dispatch(action);
    }
}

export default new ContactsDispatcher();