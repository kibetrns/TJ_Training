/**
 * A simple function that returns a Boolean indicating whether a string is a palindrome
 * @param {string} input 
 * @returns `true` if the string is a palindrome `false` otherwise
 */
const isPalindrome = (input) => {
    let len = str.length;
    for(let i = 0; i < len/2; i++ ) {
        if (str[i] !== str[len-1-i]) {
            return false;
        }
    }
    return true;
}

/*
    call it as the following: isPalindrome("race car");
*/