import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';
import ContactsStore from '../flux/contactsStore.js';

function deleteContact(e,id){
    e.preventDefault();
    ContactsActions.deleteContact(id);
}


const Contact = (props) => {
    const {id, name, email, phone} = props.contact;
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td><a href="#"><span className="glyphicon glyphicon-pencil"></span></a></td>
            <td>
                <a href="#" className="text-danger">
                    <span className="glyphicon glyphicon-remove" onClick={e=>deleteContact(e,id)} />
                </a>
            </td>
        </tr>
    );
}

export default Contact;