let countBs1 = function (input) {
    let count = 0
    for (let index in input) {
        if (input[index] == 'B') {
            count++
        }
    }

    return count
}

let countBs2 = function(input){
    let count = 0
    for (let [index] of Array.from(input).entries()){
        if(input[index] == 'B'){
            count++
        }
    }

    return count
}

let mString = 'ABCabcBBBaaaa'
console.log(`Using <for-in> the string ${mString} contains ${countBs1(mString)} B characters`)
console.log(`Using <for-of> the string ${mString} contains ${countBs2(mString)} B characters`)