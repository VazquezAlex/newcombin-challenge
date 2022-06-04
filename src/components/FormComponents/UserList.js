import React from 'react'

export const UserList = () => {
	return (
		<div className = ' userlist_container '>
			<table className = ' userlist_table pad-x-1 '>
				<tr className = ' userlist_table-header '>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Address</th>
					<th>SSN</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
					<td>3323-23-23</td>
				</tr>
			</table>

		</div>
	)
}
