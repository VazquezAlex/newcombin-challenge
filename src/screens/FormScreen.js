import React from 'react'
import { Form } from '../components/FormComponents/Form'
import { UserList } from '../components/FormComponents/UserList'
import { Header } from '../components/Header'
import { useMembers } from '../hooks/useMembers'

export const FormScreen = () => {

	const { states, stateUpdaters } = useMembers();
	const { members } = states;
    const { addMember } = stateUpdaters;

    return (
		<div>
			<Header />
			<div className = ' formscreen_container '>
				<div className = ' formscreen_section '>
					<Form members = { members } addMember = { addMember }/>
				</div>
				<div className = ' formscreen_section '>
					<UserList members = { members } />
				</div>
			</div>
		</div>
    )
}
