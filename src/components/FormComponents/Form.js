import React, { useEffect, useState } from 'react'
import { useMembers } from '../../hooks/useMembers'

export const Form = () => {

    const { states, stateUpdaters } = useMembers();
    const { addMember } = stateUpdaters;

    const [enableForm, setEnableForm] = useState( false );
    const [ formValues, setFormValues ] = useState({
        firstName: '',
        lastName: '',
        address: '',
        ssn: '',
    }) 

    useEffect(() => {
        enableFormCheck();
    }, [ formValues]);

    const handleFormSubmit = ( e ) => {
        e.preventDefault();
        addMember(formValues);
        console.log(formValues)
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }
    
    const enableFormCheck = () => {
        console.log('Revisando si ya puedes enviar el form.');
    }

    return (
        <div className = ' pad-1 '>
            <form
                className = ' pad-x-1 '
                onSubmit = { handleFormSubmit }
            >
                <input 
                    className = ' ui_input margin-bot-1 '
                    name = 'firstName'
                    placeholder = 'First Name'
                    onChange = { handleInputChange }
                />
                <input 
                    className = ' ui_input margin-bot-1 '
                    name = 'lastName'
                    placeholder = 'Last Name'
                    onChange = { handleInputChange }
                />
                <input 
                    className = ' ui_input margin-bot-1 '
                    name = 'address'
                    placeholder = 'Address'
                    onChange = { handleInputChange }
                />
                <input 
                    className = ' ui_input margin-bot-1 '
                    name = 'ssn'
                    placeholder = 'SSN'
                    onChange = { handleInputChange }
                />

                <div className = ' form_cta-container pad-top-1 '>
                    <button
                        className = ' buttons_secondary margin-end-1 '
                    >
                        Reset
                    </button>
                    <button
                        className = ' buttons_main '
                        disabled = { !enableForm }
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
