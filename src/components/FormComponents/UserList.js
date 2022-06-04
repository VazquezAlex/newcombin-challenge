import React from 'react';
import { getMembers } from '../../api/apiCall';
import { useMembers } from '../../hooks/useMembers';

export const UserList = () => {

	const { states, stateUpdaters } = useMembers();
	const { members } = states;

	return (
		<div className = ' userlist_container '>
			<table className = ' userlist_table pad-x-1 '>
				<thead className = ' userlist_table-header '>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Address</th>
						<th>SSN</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<td>Alfreds Futterkiste</td>
						<td>Maria Anders</td>
						<td>Germany</td>
						<td>3323-23-23</td>
					</tr> */}
					{ members.map(member => (
						<tr key = { member.ssn }>
							<td>{ member.firstName }</td>
							<td>{ member.lastName }</td>
							<td>{ member.address }</td>
							<td>{ member.ssn }</td>
						</tr>
					)) }
				</tbody>
			</table>

		</div>
	)
}
