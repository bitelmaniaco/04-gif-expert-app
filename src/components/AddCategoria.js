import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategoria = ({ setCategorico }) => {

    const [valorInput, setValorInput] = useState('Hola Paco');
    
    const cogerCambiosInput = ( evento ) => {
        setValorInput( evento.target.value );
    }

    const handleSubmit = ( evento ) => {
        evento.preventDefault();

        // console.log('TODO HECHO');
        //validacion
        if( valorInput.trim().length > 2 ){
            //tocar propiedades
            //cambiando el orden de muestreo
            // setCategorico( cates => [ ...cates, valorInput ] );
            setCategorico( cates => [ valorInput, ...cates ] );
            setValorInput('');
        }
    }
    const borroInput = () => { setValorInput(''); }


    return (
        <form onSubmit={ handleSubmit }>
        
            <input 
                type="text"
                value={ valorInput }
                onChange={ cogerCambiosInput }
                onClick={ borroInput }
            />
        
        </form>
    )
    }

    //obligar que "venga" algo
    AddCategoria.protoTypes = { 
        setCategorico: PropTypes.func.isRequired
    }