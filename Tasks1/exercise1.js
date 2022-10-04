let myArray=[2,10,43,5,12,53,66,82,91,2]
function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}

const ArrayAvgArow=(myArray)=> {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}


console.log("Log name: "+ArrayAvg(myArray))
console.log("Log arow: "+ArrayAvgArow(myArray))