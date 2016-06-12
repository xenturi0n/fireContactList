import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';
import ContactsStore from '../flux/contactsStore.js';
import Contact from './Contact.jsx';

function renderContacts(contacts, editContactFields){
    return contacts.map(contact=>{
        return(
            <Contact contact={contact} key={contact.id} editContactFields={editContactFields}/>
        );
    });
}

const ContactsList = (props) => {
    const {contacts, editContactFields} = props;
    const contactItems = renderContacts(contacts, editContactFields);
    return(
        <div className="row">
            <div className="col-xs-12">
                <h3 className="text-center">Contactos</h3>
                <hr/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><span className="glyphicon glyphicon-user"/> nombre</th>
                            <th><span className="glyphicon glyphicon-envelope"/> email</th>
                            <th><span className="glyphicon glyphicon-earphone"/> telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" className="form-control"/></td>
                        <td><input type="text" className="form-control"/></td>
                        <td><input type="text" className="form-control"/></td>
                        <td><a href="#"><span className="glyphicon glyphicon-pencil" onClick={e=>editContact(e,id)}></span></a></td>
                        <td>
                            <a href="#" className="text-danger">
                                <span className="glyphicon glyphicon-remove" onClick={e=>deleteContact(e,id)} />
                            </a>
                        </td>
                    </tr>                                        
                        {contactItems}
                    </tbody>                    
                </table>
            </div>
            </div>
            
    );
}

export default ContactsList;