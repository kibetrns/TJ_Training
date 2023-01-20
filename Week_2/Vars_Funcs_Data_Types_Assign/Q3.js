function logLastElementAndNumberOfItemsInArray(array)  {
    try {
        console.log(`The LAST element in the array is ${array[array.length -1]}`);
        console.log(`The NUMBER OF ITEMs in the array is ${array.length}`);

    } catch (error) {
        console.error(error) 
    }
}