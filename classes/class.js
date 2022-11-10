import fetch from "node-fetch";
async function Request(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resJson => console.log(resJson.filter(user=>user.address.zipcode[0]==='5')))
}
Request()
 