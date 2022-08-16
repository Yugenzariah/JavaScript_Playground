// Create a function that takes an integer(minutes) and convert it to seconds. 

function convertToSeconds(minutes) {
    return minutes * 60;
}

// Create a function that takes an array (only numbers) and returns the first value.

// firstValueArray([1, 2, 3, 4, 5]) ➞ 1

function firstValueArray(arr) {
    return arr[0];
}

// Create a function that takes an array of objects(computer items) which will calculate the total price of a 
// built computer and returns it as a number.
// {"product": "Dell", "ram": "8", "price": "1200"}

const totalPrice = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return total;
}

totalPrice([
    { item: "ram", quantity: 1, price: 1200 },
    { item: "cpu", quantity: 2, price: 1500 },
    { item: "gpu", quantity: 1, price: 800 },
]);