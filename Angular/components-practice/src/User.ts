// tpe script
// class makes an object
// in type script
interface User {
  firstName: string;
  lastName: string;
  age: number;
  sex: 'female' | 'male'; //can only use female or male
}

export default User;
