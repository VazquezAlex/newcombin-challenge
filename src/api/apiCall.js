
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

export const getMembers = () => {

    return new Promise((resolve, reject) => {

        getApiToken().then(async r => {
            const url = 'http://localhost:8081/api/members'
            const membersRes = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${ r.token }`, // notice the Bearer before your token
                },
            })
    
            membersRes.json().then(res => {
                console.log(res);
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