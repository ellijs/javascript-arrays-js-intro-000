function addElementToBeggingOfArray(array, element) {
  const newArray = [...array, element];
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}
