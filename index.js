function isPalindrome(word) {
  // Write your algorithm here

    // Remove non-alphanumeric characters and convert to lowercase
    const lowercaseWord = word.toLowerCase();
    
    // Reverse the cleaned wording
    const reversedWord = lowercaseWord.split("").reverse().join("");
    
    // Check if the cleaned wording and its reverse are the same
    return lowercaseWord === reversedWord;
  
  
}
  // Test cases
  console.log(isPalindrome("abba")); // Output: true
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("a")); // Output: true
  console.log(isPalindrome("robot")); // Output: false
  console.log(isPalindrome("ab")); // Output: false
  

/* 
  Add your pseudocode here
  if it is abba return true
  if it is racecar return true
  if it is a return true
  if it is robot return false
  if it is ab return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
