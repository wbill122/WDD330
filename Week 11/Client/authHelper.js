// Server Address
const baseUrl = 'http://127.0.0.1:3000/';

// Helper function to make an http request with fetch. Returns a Json object
export async function makeRequest(url, method = 'GET', body = null) {
    //we will need to set some custom options for our fetch call
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method == 'POST' || method == 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(baseUrl + url, options);
    // In this case we are processing the response as JSON before we check the status. 
    // The API we are using will send back more meaningful error messages than the 
    //default messages in the response, but we have to convert it before we can get to them.
    const data = await response.json();
    
    if(!response.ok) {
        //server will send 500 server error if token expires...or 401 if we are not authorized, id bad username/password combination, and a 404 if URL we request does not exist. All of these would cause response.ok to be false
        console.log(response);
        throw new Error(`${data.status}: ${data.message}`);
        } else return data;
    //not catching error here, so we will need to catch it later on and handle it then. 
    
}
