import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';
import ContactsStore from '../flux/contactsStore.js';
import Contact from './Contact.jsx';

function renderContacts(contacts){
    return contacts.map(contact=>{
        return(
            <Contact contact={contact} key={contact.id}/>
        );
    });
}

const ContactsList = (props) => {
    const {contacts} = props;
    const contactItems = renderContacts(contacts);
    return(
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="text-center"><span className="glyphicon glyphicon-book"></span> Contactos</h3>
            </div>
            
            <table className="table">
                <tbody>
                    <tr>
                        <th><span className="glyphicon glyphicon-user"/> nombre</th>
                        <th><span className="glyphicon glyphicon-envelope"/> email</th>
                        <th><span className="glyphicon glyphicon-earphone"/> telefono</th>
                    </tr>                    
                    {contactItems}
                </tbody>                    
            </table>
        </div>
    );
}

export default ContactsList;