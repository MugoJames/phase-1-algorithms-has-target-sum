function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumb = new Set();

  for (let num of array) {
    let difference = target - num;
    if (seenNumb.has(difference)) {
      return true;
    } else {
      seenNumb.add(num);
    }
  }

  return false;
}

/*
  Write the Big O time complexity of your function here
*/


/*
  Add your pseudocode here
  1.Create an empty set to store SeenNumb
  2.Iterate through the array
  3.For each number in the array, calculate the difference between the target and the current number.
  4.Check if the difference exists in the set. If it does, return true .
  5.If the difference doesn't exist in the set, add the current number to the set.
  6.If no pair found return False.





/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
