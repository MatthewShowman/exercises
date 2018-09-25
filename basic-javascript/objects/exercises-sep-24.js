let myObj = {
    propName: 100,
};

// console.log(myObj.propName);

// b acts as a bully and takes anything from a
function objectBully (obj) {
    if (obj.a) {
        obj.b = obj.a;
        obj.a = "";
    }
    return obj;
}

// console.log(objectBully({a: "candy", b: "dirt"}));
// console.log(objectBully({a: "candy"}));
// console.log(objectBully({a: "candy", b: "carrot", c: "meh"}));
// console.log(objectBully({a: "", b: "carrot", c: "meh"}));
// console.log(objectBully({b: "carrot", c: "meh"}));





// 

function mapAB (myObj) {
    if (myObj.a && myObj.b) {
        myObj.ab = myObj.a + myObj.b;
    }
    return myObj;
}

// console.log(mapAB({a: 'Hi', b: 'There'}));
// console.log(mapAB({a: 'Hi'}));
// console.log(mapAB({b: 'There'}));





//

function wordLen (arr) {
    wordLengthObject = {};
    for (let i = 0; i < arr.length; i++) {
        if (!wordLengthObject.hasOwnProperty(arr[i])) {
            wordLengthObject[arr[i]] = arr[i].length;
        }
    }
    return wordLengthObject;
}

// console.log(wordLen(['a', 'bb', 'a', 'bb'])); // {'bb': 2, 'a': 1}
// console.log(wordLen(['that', 'and', 'this', 'and']));
// console.log(wordLen(['code', 'code', 'code', 'bug']));





// 

function wordCount (wordsChars) {
    countObj = {};
    for (let i = 0; i < wordsChars.length; i++) {
        if (!countObj.hasOwnProperty(wordsChars[i])) {
            countObj[wordsChars[i]] = 1;
        } else {
            countObj[wordsChars[i]] = countObj[wordsChars[i]] + 1;
        }
    }
    return countObj;
}

console.log(wordCount(['a','b','a','b','c']));
console.log(wordCount(['c','b','a']));
console.log(wordCount(['c','c','c','c','c']));
console.log(wordCount(['red','red','blue','green','red']));
