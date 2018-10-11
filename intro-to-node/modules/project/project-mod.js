function arrayNeighbors(arr, num) {
    let neighbors = [];
    let index = arr.indexOf(num);
    let max = arr.length - 1;

    if (index == 0) {
        neighbors.push(arr[max]);
        neighbors.push(arr[index + 1]);
    } else if (index == max) {
        neighbors.push(arr[index - 1]);
        neighbors.push(arr[0]);
    } else {
        neighbors.push(arr[index - 1]);
        neighbors.push(arr[index + 1]);
    }
    return neighbors;
}

module.exports = {
    arrayNeighbors,
    findNeighbors,
};


//

function findNeighbors (arr, num) {
    let neighbors = [];
    let index = arr.indexOf(num);
    let left = arr[index - 1];
    let right = arr[index + 1];

    if (index == 0) {
        left = arr[arr.length - 1];
    } else if (index == arr.length - 1) {
        right = arr[0];
    }

    neighbors.push(left, right);
    return neighbors;
}