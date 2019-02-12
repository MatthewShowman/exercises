function has77(arr) {
    for(let i = 0; i < arr.length-2;) {
        if(arr[i] === 7) {
            if(arr[i+1] === 7) {
                return true;
            }
            else if(arr[i+2] === 7) {
                return true;
            }
            else if(arr[i+1] ===7 && arr[i+2] ===7) {
                return true
            }
            else {
                i++;
            }
        }
        else {
            i++;
        }
    }
    return false;
}

function has77B(arr) {
    for(let i = 0; i < arr.length-2; i++) {
        if(arr[i] === 7 && (arr[i+1] === 7 || arr[i+2] === 7)) {
            return true
        }
    }
    return false;
}

// function has77C(arr) {
//     let has77 = arr.reduce((prev, current, index) => {
//         if(prev) return true;
//         let next = arr[index+1];
//         let nextNext = arr[index+2];
        
//         if(current === 7 && (next === 7 || nextNext === 7)) {
//             return true
//         }
//         return prev;
//     }, false);
// }

array1 = [1, 2, 3, 4, 5];
array2 = [1, 2, 3, 4, 7];
array3 = [1, 2, 7, 7, 5];
array4 = [1, 2, 7, 4, 7];
array5 = [1, 7, 3, 4, 7];

console.log(has77(array1));
console.log(has77(array2));
console.log(has77(array3));
console.log(has77(array4));
console.log(has77(array5));

console.log(has77B(array1));
console.log(has77B(array2));
console.log(has77B(array3));
console.log(has77B(array4));
console.log(has77B(array5));

console.log(has77C(array1));
console.log(has77C(array2));
console.log(has77C(array3));
console.log(has77C(array4));
console.log(has77C(array5));