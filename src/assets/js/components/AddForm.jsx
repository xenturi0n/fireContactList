import React from 'react';
import * as ContactsActions from '../flux/contactsActions.js';


function handleAddContactFormSubmit(e){
    e.preventDefault();
    console.log("form submitado");
}

const AddForm = (props) => {
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
                                <input type="text" className="form-control" name="name" placeholder="Nombre del contacto"/>
                            </div>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono" className="control-label col-xs-1">Telefono:</label>
                            <div className="col-xs-11">
                                <input type="text" className="form-control" name="telefono" placeholder="Telefono"/>
                            </div>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="control-label col-xs-1">Email:</label>
                            <div className="col-xs-11">
                                <input type="text" className="form-control" name="email" placeholder="Email"/>
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