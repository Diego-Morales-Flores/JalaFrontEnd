import fetch from "node-fetch";
console.log("Case 1");
async function Request(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const responseJson = await response.json()
    console.log("inside");
    console.log(responseJson);
    return responseJson
}
 
try {
    const res = await Request();
    console.log("outside ")
    console.log(res);
} catch (e) {
    console.log("There was an error in the API: "+e);
}