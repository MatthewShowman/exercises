//Exercise 1

// Create a function tripleAfterThreeSeconds(number)
//input: integer
//do: triple the int
//output: integer/promise?



function tripleAfterThreeSeconds(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tripled = number * 3;
            console.log(tripled);
            return resolve(tripled);
        }, 3000);
    });
}


// Exercise 2
// Make a call to tripleAfter3Seconds
/* Use the .then function
    to repeatedly pass the output of the function call
    to the same function two more times.
*/

tripleAfterThreeSeconds(3)
    .then ((num) => tripleAfterThreeSeconds(num))
    .then ((num) => tripleAfterThreeSeconds(num))


