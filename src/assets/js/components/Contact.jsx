import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';
import ContactsStore from '../flux/contactsStore.js';

function deleteContact(e,id){
    e.preventDefault();
    ContactsActions.deleteContact(id);
}

function editContact(e,id){
    e.preventDefault();
    ContactsActions.editContact(id);
}

function handleEnterAndEscKeys(e){
    if(e.key == 'Enter'){
        ContactsActions.saveContactEdits(ContactsStore.getCleanEditContactFields());
    } else if(e.key == 'Escape'){
        ContactsActions.cancelContactEdits();
    }
}


function handleNameFieldChange(e){
    ContactsActions.nameEditFieldChanged(e.target.value);
}
function handleEmailFieldChange(e){
    ContactsActions.emailEditFieldChanged(e.target.value);
}
function handlePhoneFieldChange(e){
    ContactsActions.phoneEditFieldChanged(e.target.value);
}

var clickcounter = 0;
function handleContactRowClick(e){    
    console.log("Out interval clickcounter", clickcounter);

    if(clickcounter===0){
        window.setTimeout(()=>{
            clickcounter=0;
            console.log("interval clickcounter", clickcounter);
            return;
        }, 300);    
    }
    clickcounter +=1;
    
    if(clickcounter===2){
        console.log("double click", e.target.parentElement.dataset.id);
        ContactsActions.editContact(e.target.parentElement.dataset.id);
    }
}

const Contact = (props) => {
    const {id, name, email, phone} = props.contact;

    if(props.editContactFields.isEditing && id == props.editContactFields.id){
        return(
            <tr onKeyUp={handleEnterAndEscKeys} className="bg-warning">
                <td>
                    <input  type="text" 
                            className="form-control" 
                            name="name" 
                            value={props.editContactFields.name}
                            onChange={handleNameFieldChange.bind(this)}/>
                </td>
                <td>
                    <input  type="text" 
                            className="form-control" 
                            name="email" 
                            value={props.editContactFields.email}
                            onChange={handleEmailFieldChange.bind(this)}/>
                </td>
                <td>
                    <input  type="text" 
                            className="form-control" 
                            name="phone" 
                            value={props.editContactFields.phone}
                            onChange={handlePhoneFieldChange.bind(this)}/>
                </td>
                <td>
                    <a href="#" className="text-success">
                        <span className="glyphicon glyphicon-floppy-saved" onClick={e=>editContact(e,id)}/>
                    </a>
                </td>
                <td>
                    <a href="#" className="text-danger">
                        <span className="glyphicon glyphicon-floppy-remove" onClick={e=>deleteContact(e,id)}/>
                    </a>
                </td>
            </tr>
        );
    } else{
        return(
            <tr className="contact-row" onClick={handleContactRowClick} data-id={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td><a href="#"><span className="glyphicon glyphicon-pencil" onClick={e=>editContact(e,id)}></span></a></td>
                <td>
                    <a href="#" className="text-danger">
                        <span className="glyphicon glyphicon-remove" onClick={e=>deleteContact(e,id)} />
                    </a>
                </td>
            </tr>
        );
    }
}

export default Contact;