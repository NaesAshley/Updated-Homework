const jonas = {
  firstName: "jonas",
  lastName: "coleman",
  birthYar: 1993,
  job: "student",
  friends: ["sunny", "lorenzo", "aileen"],
  hasDriversLicense: true,

  ////use this for calling once
  // calcAge: function() {
  //   console.log(this); //this calls 'jonas', you dont have to hardcode the name of the obj
  //   return 2022 - this.birthYar;

  ///use this for calling multiple times b/c you defined age
  calcAge: function () {
    this.age = 2022 - this.birthYar; //
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  }, //? is a turnary key, if true you state"a" if false "no"
};

console.log(jonas.calcAge()); //this is for the first calcAge

// lets say we need to calculate the age 3x in the application

// this is fine, but if its multiple times across multiple you
// later store it in an obj.

console.log(jonas.age); // this is for the second calcAge

console.log(jonas.getSummary());

///////////////////////////////////get summary challenge///////////////////////////////////////////

// if hasDriversLicense = true {
//   console.log ('has a drivers license')
// } else {
//   ('has no drivers license')
// }

// // console.log(`${jonas.firstName} is a ${calcAge} ${jonas.job} and )`)

////////////// there is a more concise way of doing it look at getSummary////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////coding challenge 2//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/// BMI = kg/m^2

const Mark = {
  firstName: "Mark",
  lastName: "Miller",
  massWeight: 78,
  height: 2.01,

  calcBMI: function () {
    this.bmi = this.massWeight / this.height ** 2;
  },
  // getSummary: function () {
  //   return `${this.firstName} ${this.lastName} with a BMI of ${this.calcBMI}`;
  // },
};

const John = {
  firstName: "John",
  lastName: "Smith",
  massWeight: 78,
  height: 2.01,

  calcBMI: function () {
    this.bmi = this.massWeight / this.height ** 2;
  },
};

Mark.calcBMI();
John.calcBMI();
console.log(John.bmi, Mark.bmi);

// console.log(John.getSummary);

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.firstName} ${Mark.lastName} has a ${Mark.bmi} BMI large than ${John.firstName} ${John.lastName}`
  );
} else if (John.bmi > Mark.bmi) {
  console.log(
    `${John.firstName} ${John.lastName} has a ${John.bmi} BMI larger than ${Mark.firstName} ${Mark.lastName}`
  );
} else {
  console.log(`they have the same BMI of both ${Mark.bmi} & ${John.bmi}`);
}
