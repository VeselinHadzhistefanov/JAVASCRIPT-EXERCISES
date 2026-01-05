function printFarmAnimals(cows, chickens, pigs) {
    console.log("Farm Animals Count:");
    console.log(`   ${padNumber(cows, 3)} Cows`);
    console.log(`   ${padNumber(chickens, 3)} Chickens`);
    console.log(`   ${padNumber(pigs, 3)} Pigs`);
}

function padNumber(num, size) {
    let number = String(num);
    while (number.length < size) {
        number = "0" + number;
    }

    return number;
}

module.exports = { printFarmAnimals };

// Example usage:
printFarmAnimals(5, 12, 3);