// // Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function (s, t) {
  let numLetterS = s.length;
  let numLetterT = t.length;
  if (numLetterS !== numLetterT) {
    return false;
  }
  let sDict = {};
  let tDict = {};

  for (let i = 0; i < s.length; i++) {
    if (sDict.hasOwnProperty(s[i])) {
      sDict[s[i]] += 1;
    } else {
      sDict[s[i]] = 1;
    }
    if (tDict.hasOwnProperty(t[i])) {
      tDict[t[i]] += 1;
    } else {
      tDict[t[i]] = 1;
    }
  }
  for (let k in sDict) {
    if (sDict[k] !== tDict[k]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
