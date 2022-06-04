import React from 'react';

export const UserList = ({ members }) => {

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
				<tbody className = ' userlist_table-body ' >
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
