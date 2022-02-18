const ironOut = function(input) {
    return input instanceof Array
    ? input.slice()  //this will return a copy of the string if it is an array
    : Object.values(input); //this will return an array of all the values in the object, as an Array
};


const myEach = function(collection, callback) {
  let newCollection = ironOut(collection)
  newCollection.forEach(element => callback(element))
  return collection
}

const myMap = function(collection, callback) {
    let newCollection = ironOut(collection)

    let newArr = [];
    newCollection.map(element => newArr.push(callback(element)));
    return newArr
}

const myReduce = function (collection, callback, acc) {
    let newCollection = ironOut(collection);
  
    // The if statement below handles the case where no start value is passed in
    // for the accumulator
    // If acc is null, it is set equal to the first value in newCollection
    // That first value is then sliced out of newCollection since it has already
    // been accounted for
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
};  
//I could not figure this out using reduce. 
// all my values were returned way too low but I was getting a single value back.

const myFind = function(collection, predicate) {
    let newCollection = ironOut(collection)

    return newCollection.find(predicate)
}

const myFilter = function(collection, predicate) {
    let newCollection = ironOut(collection)
    return newCollection.filter(predicate);
}

const mySize = function(collection) {
    let newCollection = ironOut(collection)
    return newCollection.length
}

const myFirst = function(arr, n = false) {
  return n ? arr.slice(0, n) : arr[0];
}

const myLast = function(arr, n = false) {
    return n ? arr.slice(arr.length - n, arr.length) : arr[arr.length - 1];  //put -1 because array counts a 0
}

const myKeys = function(object) {
    return Object.keys(object)
}

const myValues = function(object) {
    return Object.values(object)
}