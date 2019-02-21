function isBalanced(stringOfParentheses) {
    let leftPara = 0;
    let rightPara = 0;
    
    for(let i = 0; i < stringOfParentheses.length; i++) {
        let symbol = stringOfParentheses[i];
        
        if(symbol === "(")
            leftPara++;
        else
            rightPara++;
        
        if(rightPara > leftPara) {
            return false;
            }
    }
    
    if(leftPara = rightPara)
        return true;
    else
        return false;
}

test1 = '()'; // true
test2 = '(('; // false
test3 = '(()())'; // true
test4 = ')('; // false
test5 = '((((((())))))))'; // false
test6 = '(()(()))'; // true


console.log(isBalanced(test1));
console.log(isBalanced(test2));
console.log(isBalanced(test3));
console.log(isBalanced(test4));
console.log(isBalanced(test5));
console.log(isBalanced(test6));




function isBalanced2(myString) {
    let parentheses = myString.split('');
    let stack = [];

    for(let paren of parentheses) {
        if(paren === '(') {
            stack.push(paren);
        }
        else if(paren === ')') {
            if(stack.length < 1)
                return false;
            else
                stack.pop();
        }
    }

    if(stack.length > 0) {
        return false;
    }

    return true;
}

console.log('');
console.log(isBalanced2(test1));
console.log(isBalanced2(test2));
console.log(isBalanced2(test3));
console.log(isBalanced2(test4));
console.log(isBalanced2(test5));
console.log(isBalanced2(test6));