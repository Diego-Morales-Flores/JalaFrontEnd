let case1=""
let case2="{}([({})])"
let case3="{()[([{{([])}}]())]}[]"
let case4="{()[(]}[]"
let case5="{()[()]}["
let case6="{()[]}[]"
let case7="[a]"

function isBalanced(stringToProve, promise){
    console.log(promise);
    let element=stringToProve.charAt(0)
    if(element===''){
        if(promise[0]===undefined){
            return true
        }
        return false;
    }
    switch (element) {
        case '[':
            promise.push(']')
            return isBalanced(stringToProve.substring(1),promise)
        case '(':
            promise.push(')')
            return isBalanced(stringToProve.substring(1),promise)
        case '{':
            promise.push('}')
            return isBalanced(stringToProve.substring(1),promise)
        case ']':
            if(']'===promise.pop()){
                return isBalanced(stringToProve.substring(1),promise)
            }
            return false
        case ')':
            if(')'===promise.pop()){
                return isBalanced(stringToProve.substring(1),promise)
            }
            return false
        case '}':
            if('}'===promise.pop()){
                return isBalanced(stringToProve.substring(1),promise)
            }
            return false
        default:
        return false;

    }
}

console.log(case1+" "+isBalanced(case1,[]))
console.log(case2+" "+isBalanced(case2,[]))
console.log(case3+" "+isBalanced(case3,[]))
console.log(case4+" "+isBalanced(case4,[]))
console.log(case5+" "+isBalanced(case5,[]))
console.log(case6+" "+isBalanced(case6,[]))
console.log(case7+" "+isBalanced(case7,[]))