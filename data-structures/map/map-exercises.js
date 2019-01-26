let myMap = new Map();

myMap.set("a", "aaa");
myMap.set("b", "bbb");
myMap.set("c", "ccc");

function mapShare(map) {
    if(map.has("a")) {
        map.set("b", map.get("a"));
    }
    map.delete("c");
    return map;
}

console.log(mapShare(myMap));

// EXERCISE 2

let myMap2 = new Map();

myMap2.set("a", "Hi");
myMap2.set("b", "There");
myMap2.set("c", "ccc");

function mapAB(map) {
    if(map.has("a") && map.has("b")) {
        map.set("ab", map.get("a") + map.get("b"));
    }
    return map;
}

console.log(mapAB(myMap2));

// EXERCISE 3

let wordString = "salt tea toast soda coffee nuts syrup";

function getLetterWordMap(stringOfWords) {
    let letterMap = new Map();
    let wordArray = stringOfWords.split(' ');

    // for(let i = 0; i < wordArray.length; i++ ) {
    //     let currentWord = wordArray[i];
    //     let currentChar = wordArray[i].charAt(0);
        
    //     if(!letterMap.has(currentChar)) {
    //         letterMap.set(currentChar, [currentWord]);
    //     } else {
    //         letterMap.get(currentChar).push(currentWord);
    //     }
    // }

    wordArray.forEach((word) => {
        let firstLetter = word.charAt(0);

        if (letterMap.has(firstLetter)) {
            letterMap.get(firstLetter).push(word);
        }
        else {
            letterMap.set(firstLetter, [word]);
        }
    });

    return letterMap;
}

console.log(getLetterWordMap(wordString));