// let randomSentence = prompt("write random sentence for project");

// if (randomSentence != null) {
//   document.getElementById("Sentence").innerText = "Sentence: " + randomSentence;
// }
//////////////////////////////////////////////////////
const string = "The string is here manually typed out, the the the the the";

function countWords(s) {
  const hashMap = {};
  // hashMap[word] = undefined
  const words = s.split(" ");
  words.forEach((word) => {
    hashMap[word] = (hashMap[word] || 0) + 1;
  });
  return hashMap;
}

const result = countWords(string);
console.log(result);
