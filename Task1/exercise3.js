
function RunOperation (a,b,func){
try{
    return func(a,b)
}
catch(error){
    return(0)
}
    

}
const sum=(a,b)=>{
    return a+b;
}
const rest=(a,b)=>{
    return a-b;
}
const divide=(a,b)=>{
    return a/b;
}
const multiply=(a,b)=>{
    return a*b;
}
const Answer = [];
Answer[0]=RunOperation(5,2,sum)
Answer[1]=RunOperation(5,2,rest)
Answer[2]=RunOperation(5,0,divide)
Answer[3]=RunOperation(5,2,multiply)

for (let index = 0; index < Answer.length; index++) {
    console.log(Answer[index]); 
}
