/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if the lengths of the strings are equal
  if (str1.length === str2.length) {
    // Convert strings to arrays of characters for easier manipulation
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    // Sort the arrays
    arr1.sort();
    arr2.sort();

    // Check if the sorted arrays are equal
    return arr1.join('') === arr2.join('');
  } else {
    // If lengths are not equal, the strings cannot be anagrams
    return false;
  }

}

module.exports = isAnagram;
