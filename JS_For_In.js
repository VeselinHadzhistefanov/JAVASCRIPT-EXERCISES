let arr = [10, 20, 30];

// Preferred: use entries() to get index + value with for...of.
for (const [index, value] of arr.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}

// Alternative: manual index with a "borrowed" value variable.
for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    console.log(`Index: ${i}, Value: ${value}`);
}
