import React, { useState, useEffect } from 'react'
import { addNewMember, getMembers } from '../api/apiCall';

export const useMembers = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
		loadMembers();
	}, []);

    const loadMembers = () => {
        getMembers().then(r => {
            setMembers( r );
		})
    }

    const addMember = ( memberData ) => {
        addNewMember( memberData ).then(() => {
            loadMembers();
        }).catch(err => alert('An error ocurrend with code ' + err.status + ': ' + err.statusText ));
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
