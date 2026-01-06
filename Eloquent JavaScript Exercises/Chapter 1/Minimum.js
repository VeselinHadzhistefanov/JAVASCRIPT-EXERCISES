let getMinimum = function(...args){
    console.log ("Testing!")
    for (let index in args){
        console.log(`Array element: ${index}: ${args[index]}`)
    }
}
//arr = [1, 2, 3, 4, 5, 6, 7]
getMinimum(1, 2, 3, 4, 5, 6, 7)