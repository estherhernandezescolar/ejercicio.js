// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: 
// Output: false
// Example 3:

// Input: []
// Output: true

const input = [1,2,3,1];

const output = input.filter((value, index) => {
    return input.indexOf(value) === index;
  }
);
if (output.length === input.length) {
    console.log('TRUE');
}  else{
    console.log('FALSE');
}