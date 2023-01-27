/**
 * A function that allows for the using a Prompt allows users to 
 * enter numbers separated by commas then print the sum of the numbers.
 * (Also returns the sum of the numbers)
 *
 * @returns sum
 */

const sumNumbers = () => {
    let numbers = prompt("Enter numbers separated by commas").split(",");
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i]);
    }
    console.log(`The sum of the numbers is: ${sum}`);
    return sum;
}

/*
    call it as the following: sumNumbers();
*/