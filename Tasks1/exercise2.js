let myArray=[1,2,3,4,5,6,7,8,9,10]
function sumOdds(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        if(myArray[i]%2==1){
            summ = summ + myArray[i];
        }
        i++;
}
    return summ;
}
const sumOddsArow=(myArray)=> {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        if(myArray[i]%2==1){
            summ = summ + myArray[i];
        }
        i++;
}
    return summ;
}

console.log("Log name: "+sumOdds(myArray))
console.log("Log arow: "+sumOddsArow(myArray))