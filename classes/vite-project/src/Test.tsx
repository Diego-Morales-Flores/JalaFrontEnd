import { useState } from "react";
type user={
  name:string,
  age:number,
  active:true,
  location:location
};
type location={
  latitude:number
  longitude:number
}
export default function Test() {

  const users : user[]= [{
    name: "diego",
    age: 2,
    active: true,
    location: {
      latitude:232,
      longitude: 1,
    }
  }]
  
  const [user, setUser] = useState(users)
  
  const PrintUser =(user:user)=>{
    const {name, age, active,location:{longitude, latitude}}=user
    console.log(`${name} ${age} ${active} ${longitude} ${latitude}`);
  }

  const Print=()=>{
    users.forEach(PrintUser)
  }
  const Delete=()=>{
    setUser([]);
  }
  return (
    <div>
      <button onClick={Print}>Print</button>
      <button onClick={Delete}>Delete</button>
      
    </div>
  )
}
