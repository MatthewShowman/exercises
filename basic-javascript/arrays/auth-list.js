// Sept 17 Exercise 5
// Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines.
// Return false otherwise.

// The guidelines say that the username is valid only if:

//     it is between 6-10 characters long
//     contains at least 1 lowercase letter
//     contains at least 1 number
//     contains only numbers and letters

console.log(authList(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character
console.log(authList(['JOHN123', 'alex222', 'sandra1']));    // returns false
 
function authListB (users) {
    
    let test = true;
    
    for (let i = 0; i < users.length; i++) {

        if (users[i].length < 6 || users[i].length > 10) {
            return false;
        }
    }

    // for (let i = 0; i < users.length; i++) {
    //     let username = users[i];
    //     for (j = 0; j < username.length; j++) {
    //         let currentChar = username.charCodeAt(j);
            
    //         if ((currentChar >= 48 && currentChar <= 57) || (currentChar >= 65 && currentChar <= 90) || (currentChar >= 97 && currentChar <= 122)) {
    //             test = true;
    //         } else{
    //             return false;
    //         }
    //     }
    // }

    for (let i = 0; i < users.length; i++) {
        test = false;
        let username = users[i];
        for (j = 0; j < username.length; j++) {
            let currentChar = username.charCodeAt(j);
            
            if (currentChar >= 48 && currentChar <= 57) {
                test = true;
                break;
            }
        }
    }

    // for (let i = 0; i < users.length; i++) {
    //     test = false;
    //     let username = users[i];
    //     for (j = 0; j < username.length; j++) {
    //         let currentChar = username.charCodeAt(j);
            
    //         if (currentChar >= 97 && currentChar <= 122) {
    //             test = true;
    //             break;
    //         }
    //     }
    // }

    return test;
}






// CLASS SOLUTION

function authList (usernames) {
    // Loop over every username.
    for (let i = 0; i < usernames.length; i++) {

        // If username length is not 6-10 chars
            // return false
        if (usernames[i].length < 6 || usernames[i].length > 10) {
                return false;
            }   
        // create a bool to store if username has lowercase
        let hasLowercase = false;
        
        // create a bool to store if username has number
        let hasNumber = false;

        for (let j = 0; j < usernames[i].length; j++) {
            let charCode = usernames[i].charCodeAt(j);
            
            // If char is lowercase,
                // set lowecase variable to true
            if (charCode >= 97 && charCode <= 122) {
                hasLowercase = true;
            }
            
            // If character is number,
                // set number variable to true
            else if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
            
            // If character is NOT number or letter,
                // return false
            else if (charCode < 65 || charCode > 90) {
                return false;
            }
        }
        // If any variable is false,
            // return false
        if (!hasLowercase || !hasNumber) {
            return false;
        }
    }
    // return true
    return true;
}   