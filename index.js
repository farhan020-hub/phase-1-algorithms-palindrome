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
 
*/

/*

  Add written explanation of your solution here
  before i check the word if it is a palindrome, i change the words to lowercase then i'll split the word to single letters in an array
  then i'll reverse the words and join them so as to ensure that it is a palindrome. i'll return the lowercaseword to be equal to the reversed word
  so as to check if it is a palindrome or not. If it is a palindrome ill console log the word to be true or false if it is not.  
  
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
