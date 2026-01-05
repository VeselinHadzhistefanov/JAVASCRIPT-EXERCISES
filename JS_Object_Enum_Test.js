//create an array
let arr = [10, 20, 30]

arr.label = "numbers"
arr.description = "An array of numbers"
arr.model = {type: "numeric", default: 0}

for (let key in arr) {
    //console.log(`${key}: ${arr[key]}`)
}