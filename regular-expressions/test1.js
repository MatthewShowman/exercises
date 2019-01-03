// let containsDigit = /[0-9]/.test("123 Baker St");
// let isPhoneNumber = /(\d-)?\d{3}-\d{3}-\d{4}/.test("1-5255-479-5656");
// console.log(containsDigit);
// console.log(isPhoneNumber);

// //"string".match(regexp)

// let phoneNumber = "1-255-479-5656".match(/(\d-)?\d{3}-\d{3}-\d{4}/);
// console.log(phoneNumber[0]);
// let allDigits = "1-255-479-5656".match(/\d/g);
// console.log(allDigits);

function isVisa(cardNum) {
    return /^4[0-9]{15}$/.test(cardNum);
}

// console.log(isVisa("3333333333332221"));
// console.log(isVisa("4333333333332221"));
// console.log(isVisa("43333333333322215"));
// console.log(isVisa("433333333333222"));

function isAmericanExpress(cardNum) {
    return /^3[47]\d{13}$/.test(cardNum);
    // return /^(34|37)\d{13}$/.test(cardNum);
}

// console.log(isAmericanExpress("433333333333222"));
// console.log(isAmericanExpress("343333333333222"));
// console.log(isAmericanExpress("373333333333222"));
// console.log(isAmericanExpress("3733333333332227"));
// console.log(isAmericanExpress("34333333333322"));

function getNumbers (randomString) {
    return randomString.match(/\d{1,}/g);
    //return randomString.match(/\d{1,}/g);
}

// console.log(getNumbers("34adf 345436klh87jk kj6"));
// console.log(getNumbers("56yu345oi7879mnbmbj 78964 5321"));

function formatPhoneNumber(phoneNumber) {
    let numArray = phoneNumber.match(/\d{3,}/g);
    let formatttedNum = numArray.join("");
    return formatttedNum;
}

console.log(formatPhoneNumber("1-234-345-4567"));
console.log(formatPhoneNumber("1-888-222-4444"));