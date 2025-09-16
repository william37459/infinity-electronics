export async function login(username: string, password: string) {
    if(password.length < 6) return false;
    return true;
    // !NON FUNCITONAL ENDPOINT - RETURNS 401 : WRONG CREDENTIALS
    // const res = await fetch('https://fakestoreapi.com/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: "john_doe",
    //         password: "pass123"
    //     }),
    // });
    // console.log(res.ok)
    // return res.ok;
}