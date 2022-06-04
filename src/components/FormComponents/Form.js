import React, { useEffect, useState } from 'react';

const formValuesInitialState = {
    firstName: '',
    lastName: '',
    address: '',
    ssn: '',
}

const errorsIntialState = {
    fields: 'start',
    ssn: 'start',
}

export const Form = ({ addMember, members }) => {

    const [enableForm, setEnableForm] = useState( false );
    const [ formValues, setFormValues ] = useState(formValuesInitialState); 
    const [ errors, setErrors ] = useState(errorsIntialState)

    useEffect(() => {
        if( errors.fields === 'start' ) return;
        enableFormCheck();
    }, [ formValues.lastName, formValues.firstName, formValues.address ]);

    useEffect(() => {
        if( errors.ssn === 'start' ) return;
        validateSSN();
    }, [ formValues.ssn ]);

    useEffect(() => {
        if( errors.fields === 'ready' && errors.ssn === 'ready' ) {
            setEnableForm( true );
        } else {
            setEnableForm( false );
        }
    }, [ errors ]);

    const handleFormSubmit = ( e ) => {
        addMember(formValues);
        setFormValues( formValuesInitialState );
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value.trim(),
        })
        if( target.name !== 'ssn' ) {
            enableFormCheck();
        } else {
            validateSSN();
        }
    }
    
    const enableFormCheck = () => {
        const { firstName, lastName, address } = formValues;
        
        if( firstName.length >= 2 && lastName.length >= 2 && address.length >= 2 ) {
            setErrors({ ...errors, fields: 'ready' });
        } else {
            setErrors({ ...errors, fields: 'All fields must container at least 2 characters' });
        } 
    }

    const validateSSN = () => {
        const { ssn } = formValues;
        const regexp = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
        if( !regexp.test(ssn) ) {
            setErrors({ ...errors, ssn: 'SSN must follow this structure ###-##-#### and only contain numbers.' })
        } else {
            checkForExistingSSN( ssn );
        }
    }

    const checkForExistingSSN = ( ssn ) => {
        const foundSSN = members.findIndex(member => member.ssn === ssn);
        if( foundSSN !== -1 ) {
            setErrors({ ...errors, ssn: 'This SSN is already registered with another user.'} );
        } else {
            setErrors({ ...errors, ssn: 'ready'} );
        }
    }

    const resetForm = () => {
        setFormValues( formValuesInitialState );
        setErrors( errorsIntialState );
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
                { errors.ssn !== '' && errors.ssn !== 'ready' && errors.ssn !== 'start' && (
                    <p className = ' ui_error-message '>{ errors.ssn }</p>
                ) }

                { errors.fields !== '' && errors.fields !== 'ready' && errors.fields !== 'start' && (
                    <p className = ' ui_error-message pad-top-1 '>{ errors.fields }</p>
                ) }

                <div className = ' form_cta-container pad-top-1 '>
                    <button
                        className = ' buttons_secondary margin-end-1 '
                        type = 'reset'
                        onClick = { resetForm }
                    >
                        Reset
                    </button>
                    <button
                        className = ' buttons_main buttons_form '
                        disabled = { !enableForm }
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
