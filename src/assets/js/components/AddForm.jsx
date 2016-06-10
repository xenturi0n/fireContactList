import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';
import ContactsStore from '../flux/contactsStore.js';

function handleAddContactFormSubmit(e){    
    e.preventDefault(); 
    console.log("form submitado");
    ContactsActions.saveNewContact(ContactsStore.getCleanAddFormFields());
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
    console.log("Rendering AddForm -> props.fields=",props.fields);
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="well">
                    <h3 className="text-center">Agregar Contacto</h3>
                    <hr/>
                    <form action="" onSubmit={handleAddContactFormSubmit.bind(this)} className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="name" className="control-label col-xs-1">Nombre:</label>
                            <div className="col-xs-11">
                                <input type="text" className="form-control" name="name" placeholder="Nombre del contacto" value={name} onChange={handleNameFieldChange.bind(this)}/>
                            </div>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono" className="control-label col-xs-1">Telefono:</label>
                            <div className="col-xs-11">
                                <input type="text" className="form-control" name="telefono" placeholder="Telefono" value={phone} onChange={handlePhoneFieldChange.bind(this)}/>
                            </div>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="control-label col-xs-1">Email:</label>
                            <div className="col-xs-11">
                                <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={handleEmailFieldChange.bind(this)}/>
                            </div>                            
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-1">
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