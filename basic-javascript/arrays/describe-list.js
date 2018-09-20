// Sept 19 Exercise 3
// Write function describeList which tells if the list is empty or contains only one element or more.
 
console.log(describeList([]));          // "empty"
console.log(describeList([1]));         // "singleton"
console.log(describeList([1,2]));       // "longer"
console.log(describeList([]));          // "empty"
console.log(describeList([1.5]));       // "singleton"
console.log(describeList([1.5,2.5, 3]));   // "longer"

function describeList (arr) {

    let description = '';

    switch (arr.length) {
        case 0:
            return 'empty';
            break;
            
        case 1:
            return 'singleton';
            break;
        
        default:
            return 'longer';
    }
}