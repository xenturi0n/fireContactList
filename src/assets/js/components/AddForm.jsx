import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';
import ContactsStore from '../flux/contactsStore.js';

function handleAddContactFormSubmit(e){    
    e.preventDefault(); 
    ContactsActions.saveNewContact(ContactsStore.getCleanAddFormFields());
    e.target.querySelector('input').focus();
}

function handleNameFieldChange(e){
    ContactsActions.nameFieldChanged(e.target.value);
}

function handlePhoneFieldChange(e){
    ContactsActions.phoneFieldChanged(e.target.value);
}

function handleEmailFieldChange(e){
    ContactsActions.emailFieldChanged(e.target.value);
}

const AddForm = (props) => {
    const {name, phone, email}=props.fields;
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="well">
                    <h3 className="text-center">Agregar Contacto</h3>
                    <hr/>
                    <form action="" onSubmit={handleAddContactFormSubmit.bind(this)} className="form">
                        <div className="form-group">
                            <label htmlFor="name" className="control-label">Nombre:</label>
                            <input type="text" className="form-control" name="name" placeholder="Nombre del contacto" value={name} onChange={handleNameFieldChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono" className="control-label">Telefono:</label>
                            <input type="text" className="form-control" name="telefono" placeholder="Telefono" value={phone} onChange={handlePhoneFieldChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="control-label">Email:</label>
                            <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={handleEmailFieldChange.bind(this)}/>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button type="submit" className="btn btn-primary">Crear contacto</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>        
    );
}

export default AddForm;