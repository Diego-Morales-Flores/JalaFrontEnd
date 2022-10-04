let increment = (
        function(n) {
            return function() {
                        let a= (n = n + 1);
                        return a
                    }
        }(0)
    );
function x(){
    cont=0
    function y(){
        return cont++
    }
}

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

