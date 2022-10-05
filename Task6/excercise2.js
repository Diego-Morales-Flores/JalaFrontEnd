async function Job(data){
    if(isNaN(data)){
        let promis= Promise.reject("error").catch(e=>e)
        return promis
    }
    if(data%2===0){
        await sleep(2000)
        return Promise.resolve("even").then(res=>res)
    }
    else{
        await sleep(1000)
        return Promise.resolve("odd").then(res=>res)
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let res1=await Job("diegoS")
let res2=await Job(14)
let res3=await Job(15)

console.log(res1);
console.log(res2);
console.log(res3);
