import React, { useState } from 'react'
import { getMembers } from '../api/apiCall';

export const useMembers = () => {

    const [members, setMembers] = useState([]);

    React.useEffect(() => {
		loadMembers();
	}, []);

    const loadMembers = () => {
        getMembers().then(r => {
			console.log( r );
            setMembers( r );
		})
    }

    const states = {
        members,
    }

    const stateUpdaters = {

    }

    return {
        states,
        stateUpdaters,
    }

}
