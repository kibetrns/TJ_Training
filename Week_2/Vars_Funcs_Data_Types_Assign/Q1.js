function checkIfOddOrEven(number) {
    try {
        if( (number % 2) === 0) {
            console.log(`${number} is an EVEN number`)
        } else {
            console.log(`${number} is an ODD number`);
        }
        
    } catch (error) {
        console.error(error)
    }
}
