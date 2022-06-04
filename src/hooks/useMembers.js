import React, { useState } from 'react'
import { addNewMember, getMembers } from '../api/apiCall';

export const useMembers = () => {

    const [members, setMembers] = useState([]);

    React.useEffect(() => {
		loadMembers();
	}, []);

    const loadMembers = () => {
        getMembers().then(r => {
            setMembers( r );
		})
    }

    const addMember = () => {
        const memberData = {
            firstName: 'Alex',
            lastName: 'Vazquez',
            address: 'Mexico',
            ssn: '123-45-5678',
        }
        addNewMember( memberData );
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
