for (let i = 99; i >= 0; i--) {
  console.log(i);
} //counting from 99-0  >> question #2

for (let i = 0; i <= 99; i++) {
  console.log(i);
} //counting from 0-99  >> question #1

for (let i = 0; i <= 99; i += 2) {
  console.log(i);
} //counting from 0-99 + even numbers ascending >> question #3

for (let i = 0; i <= 99; i++) {
  const isOdd = i % 2 === 1;
  if (isOdd) {
    console.log(i);
  }
} //Create a loop that logs the ODD numbers from 0-99 (ascending) >> question #5

for (let i = 99; i >= 0; i--) {
  const isOdd = i % 2 === 1;
  if (isOdd) {
    console.log(i);
  }
} //Create a loop that logs the ODD numbers from 99-0 (descending) >> #6
