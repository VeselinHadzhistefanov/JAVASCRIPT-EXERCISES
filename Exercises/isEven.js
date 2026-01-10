let isEvenVar = function (num) {
    if (num > 1) {
        return isEven(num - 2)
    } else if (num == 0) {
        return true;
    }
    return false;
}

function isEven(num){
    if(num > 1 ){
        return isEven(num - 2)
    }
    if(num == 0){
        return true;
    }
    return false;
}

function getIterations(num){
    return num / 2;
}

let num = 3332;

let t1 = Date.now()
let numIsEven = isEven(BigInt(num))
let t2 = Date.now()
console.log(numIsEven)
console.log(`Iterations: ${getIterations(num)} Time elapsed: ${t2 - t1}`)

