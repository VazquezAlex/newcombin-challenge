import React, { useState, useEffect } from 'react'
import { addNewMember, getMembers } from '../api/apiCall';

export const useMembers = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
		loadMembers();
	}, []);

    /* 
     *   Add a new member to API DB.
     *   @param { object } memberData. Object containin { firstName, lastName, address, ssn }
     */
    const addMember = ( memberData ) => {
        addNewMember( memberData ).then(() => {
            loadMembers();
        }).catch(err => alert('An error ocurrend with code ' + err.status + ': ' + err.statusText ));
    } 

    /* 
     *   Get members from API DB.
     */
    const loadMembers = () => {
        getMembers().then(r => {
            setMembers( r );
		})
    }


    const states = {
        members,
    }

    const stateUpdaters = {
        addMember,
    }

    return {
        states,
        stateUpdaters,
    }

}
