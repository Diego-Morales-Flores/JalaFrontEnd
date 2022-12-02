import fetch from "node-fetch";
async function Request(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resJson => console.log(resJson.filter(user=>user.address.zipcode[0]==='5')))
}
Request()

let var1=1
const diego=(value)=>{
    let var2=value;
    return ()=>{
        console.log(var2);
    }
}

const diego2=diego(2)
const diego3=diego(10)
diego2()
diego3()
