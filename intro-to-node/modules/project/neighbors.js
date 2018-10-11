const neighbors = require('./project-mod');

console.log(neighbors.arrayNeighbors([62,89,56,45,12,91,81], 45));
console.log(neighbors.arrayNeighbors([62,89,56,45,12,91,81], 62));
console.log(neighbors.arrayNeighbors([62,89,56,45,12,91,81], 81));

console.log(neighbors.findNeighbors([62,89,56,45,12,91,81], 45));
console.log(neighbors.findNeighbors([62,89,56,45,12,91,81], 62));
console.log(neighbors.findNeighbors([62,89,56,45,12,91,81], 81));