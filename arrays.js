var chocolateBars = ["snickers", "hundres grand", "kitkat", "skkitles"]

function addElementToBeggingOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray; // immutable
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;  //mutable
}

function addElementToEndOfArray(array, element) {
  const newArray = [...array, element];
  return newArray; //immutable
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;  // mutated
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);   // immutable. should not alter original array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1); // Immutable  .pop() mutable
}

//items.splice(1, 1)  at index 1, remove 1 item. Immutable
//item.splice(1, 1, 6, 7) at index 1, remove 1, add 6 and 7
