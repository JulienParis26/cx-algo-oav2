function bubbleSorting(array) {
    const arrayLength = array.length
      
    for (let i = 0; i < arrayLength;) {
       let invert = array[i]
    
       if (array[i] > array[i + 1]){
            array[i] = array[i + 1]
            array[i + 1] = invert
            i = 0
        } else {
            i++
        }
    }
    return array;
}
    
console.log(bubbleSorting([4, 6, 2, 8, 5, 7, 3, 1]))