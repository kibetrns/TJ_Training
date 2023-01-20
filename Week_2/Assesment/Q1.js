function largestNumber(num1, num2, num3, num4, num5) {
    let largest = num1;
    let numbers = [num1, num2, num3, num4, num5];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    console.log(`The LARGEST number is: ${largest}`);
}