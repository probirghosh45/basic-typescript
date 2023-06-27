function addTwo(num1: number, num2: number): number {
  return num1 + num2;
}

// addTwo(30,20);

const addTwo2 = (num1: number , num2: number=35): number => num1 + num2; //num2 = 35 [default parameter]

// addTwo2(30,20);
addTwo2(20)

const arr = [2, 4, 5, 6, 7];

const newArr = arr.map((element: number) => element * element);

// console.log(newArr);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "PK",
  balance: 250,
  addBalance(money: number) {
    // return `My New Balance is ${this.balance + money}`;
    console.log(`My New Balance is ${this.balance + money}`); // jehetu console.log kono kichu return korce na tai return type void hobe.
  },
};




// spread operator

const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [2023,2024,2025]

const combinedArr = arr1.push(...arr2);
console.log(arr1.length);



/***
 * 
 * 
 *  terminal file run : npx ts-node-dev src/function.ts
 *  as like nodemon : npx te-node-dev --respawn src/file-name.ts 
 * 
 * ***/ 



//rest operators

// const myFriends = (friends1 : string , friends2 : string, friends3 : string) : void => {
//     console.log(`Hi ${friends1} , ${friends2} , ${friends3}`);
//     console.log(friends1, friends2, friends3);
// }

const myFriends = ( ...friend : string [] ) : void => {
    // console.log(`Hi ${friend}`);
    console.log(friend);
}


myFriends("PK", "ABD", "UK" , "BK");  


//array and Object destructing 

const fndsName = ["ali","tuli","ruli","muli"];
const myBestFriend = {
    userName : "Rafiq",
    age : 25
}
const [bestFriend] = fndsName;
const {userName : fullName, age} = myBestFriend;  //here fullName is name alias
console.log({fullName});
console.log(fullName);






