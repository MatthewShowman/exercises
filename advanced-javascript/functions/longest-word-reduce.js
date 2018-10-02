// find the longest word

let testString = 'In the time of chimpanzees I was a monkey';


function longestWordTest(sentence) {
    return sentence.split(' ')
        .reduce((longest, potential) => (potential.length > longest.length) ? potential : longest, '');
}


let longestWord = testString.split(' ')
    .reduce((longest, potential) => (potential.length > longest.length) ? potential : longest, '');




console.log();
console.log(`The longest word in the sentence is "${longestWord}".`);
console.log();
console.log(`The longest word in the sentence is "${longestWordTest(testString)}".`);
console.log();