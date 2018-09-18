// firstHalf
// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

function firstHalf(word) {
    let firstHalfString = word.substring(0,word.length / 2);
    return firstHalfString;
}

console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));
console.log(firstHalf("abcdefghijklmnopqrstuvwxyz"));
