function addElementToBeggingOfArray(array, element) {
  const newArray = [...array, element]; // not modify the original
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
  return array.slice(1);   // immutable. should not alter original array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1); // Immutable  .pop() mutable
}

//items.splice(1, 1)  at index 1, remove 1 item. Immutable
//item.splice(1, 1, 6, 7) at index 1, remove 1, add 6 and 7
