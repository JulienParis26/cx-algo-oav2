function sortByInsertion(array) {
    let arrayLength = array.length      
    let i, j             
    
    for (i = 1; i < arrayLength; i++) {
        const key = array[i]
        j = i - 1     // when i = 1, j = 0

      while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j -= 1      // 0 - 1 = -1
      }
      array[j + 1] = key

    }
    return array
}

console.log(sortByInsertion([4, 6, 2, 8, 5, 7, 3, 1]))