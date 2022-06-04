
/* 
 *   Get API Token through Authentication.
 */
const getApiToken = async () => {
    const url = 'http://localhost:8081/auth';
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "sarah",
            "password": "connor"
        })
    })
    return resp.json();
}

/* 
 *   Get members on API DB.
 */
export const getMembers = () => {
    return new Promise((resolve, reject) => {
        getApiToken().then(async r => {
            const url = 'http://localhost:8081/api/members'
            const membersRes = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${ r.token }`,
                },
            })
    
            membersRes.json().then(res => {
                resolve( res );
            }).catch(e => {
                reject(new Error(e));
            })
    
        }).catch( e => {
            console.error(new Error(e));    
            reject( new Error(e));
        })
    })
}

/* 
 *   Add new member to API DB.
 *   @param { object } data - Object containing data { firstName, lastName, address, ssn }.
 */
export const addNewMember = async ({ firstName, lastName, address, ssn }) => {
    return new Promise(async (resolve, reject) => {
        getApiToken().then(async r => {
            const url = 'http://localhost:8081/api/members'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${ r.token }`, 
                },
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName,
                    "address": address,
                    "ssn": ssn,
                })
            })  

            console.log(response);
            if( response.status === 200 ) {
                resolve(response.status)
            } else {
                reject( response )
            }

        })
    })
}