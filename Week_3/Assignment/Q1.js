/**
 * A funtion that removes duplicate items from an array(ignores case sensitivity)
 * @param {[]} arr - The inputed array
 * @returns {[]} `prev` - The final array 
 */


const removeDuplicatesIgnoreCase = (arr) => arr.reduce((prev, curr) => {
    if (!prev.map(item => item.toLowerCase()).includes(curr.toLowerCase())) {
        prev.push(curr);
    }
    return prev;
}, []);

/*
    call it as the following: removeDuplicatesIgnoreCase(["aa", "bb", "dd", "cc", "aa", "DD"]);
*/