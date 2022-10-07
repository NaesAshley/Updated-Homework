// let randomSentence = prompt("write random sentence for project");

// if (randomSentence != null) {
//   document.getElementById("Sentence").innerText = "Sentence: " + randomSentence;
// }
//////////////////////////////////////////////////////
const string = "The string is here manually typed out, the the the the the";

function countWords(s) {
  //s is meant for string
  const hashMap = {};
  // hashMap[word] = undefined
  const words = s.split(" ");
  words.forEach((word) => {
    hashMap[word] = (hashMap[word] || 0) + 1;
  });
  return hashMap;
}

const result = countWords(string);
// console.log(result);

//////////////////////////////////////////////
/////Loop the Loop: 2D Array Addition ///////
/////////////////////////////////////////////

const array = [
  [10, 20, 30],
  [40, 50, 60],
  [70, -80, 90],
];

console.log(array[0]);

let sum = 0;
let sum1 = 0;

function sumArray() {
  let rowAdd = 0;
  let columnAdd = 0;

  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array[i].length; k++) {
      sum += array[i][k]; //10+20+30
    }
    if (sum > rowAdd) {
      rowAdd = sum; // declared it so that the new value of rowAdd is the update of the loop
    }
  }
  console.log(rowAdd);

  for (let a = 0; a < array.length; a++) {
    // loops the big array
    sum1 = 0;
    for (let j = 0; j < array.length; j++) {
      //loops the inner array
      sum1 += array[j][a];
      // sum = sum + array[j][a]
    }
    if (sum1 > columnAdd) {
      columnAdd = sum1; //let the new sum to equal the new amount
    }
  }
  console.log(columnAdd);
  // return rowAdd; // can't put return here because the entire function stops
}

sumArray(); //pairs with the console.log if you don't "call" it it will not console
