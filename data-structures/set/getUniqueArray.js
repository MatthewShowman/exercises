function getUniqueArray(arr) {
    let uniqueArray = [];
    let fullArray = arr;

    for(let i = 0; i < arr.length; i++) {
        let currentValue = fullArray[i];
        let searchedValue = uniqueArray.includes(currentValue);
        
        if(!searchedValue) {
            uniqueArray.push(currentValue);
        }
    }

    // while(fullArray.length > 0){
    //     let currentValue = fullArray.pop();
    //     let searchedValue = uniqueArray.includes(currentValue);
        
    //     if(!searchedValue) {
    //         uniqueArray.push(currentValue);
    //     }
    // }
    
    return uniqueArray;
}

// let testArray = [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 6];

// console.log(getUniqueArray(testArray));

module.exports = getUniqueArray;