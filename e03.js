function sortBySelection(array) {
    let arrayLength = array.length
    
    for (let i = 0; i < arrayLength; i++) {
      let min = i 

      for (let j = i + 1; j < arrayLength; j++) {

        if(array[j] < array[min]){
            min = j
        }
      }

      let key = array[i]
      array[i] = array[min]
      array[min] = key

    }
    return array
  };

console.log(sortBySelection([4, 6, 2, 8, 5, 7, 3, 1]))
