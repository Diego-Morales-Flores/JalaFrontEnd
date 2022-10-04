myArray=[1,3,3,4,5,1,3,5,1]
const Join = (myArray)=>{
    return myArray.join("");
}


const JoinDash = (myArray)=>{
    return myArray.join('-');
}

const JoinDash2 = (myArray)=>{
    return myArray.map((n,index)=> index % 2===1 ?(index+1===myArray.length?n:`${n}-`): n).join('');
}



console.log(Join(myArray))
console.log(JoinDash(myArray))
console.log(JoinDash2(myArray))