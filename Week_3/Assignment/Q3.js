  /**
  * A function that clears an array from all unnecessary elements, like false, undefined, empty strings, zero, null
  * @param {[]} arr 
  * @returns {[]}  An array without unnecessary elements
  */
 const clearArray = (arr) => arr.filter(elelment =>
     elelment && elelment !== "" && elelment !== 0 && elelment !== null
     );

     
/*
         call it as the following:  clearArray( ["11", "22", "42", "78", "", null]);
*/
