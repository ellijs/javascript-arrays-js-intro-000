function addElementToBeggingOfArray(array, element) {
  const newArray = [...array, element]; // immutated
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element);  //mutated
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();   // mutated
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);   // should not mutate the original array
}
