// bar bar type define na kore akbar define kore dilam

type CrushType = {
  fullName: string;
  age?: number;
  address: string;
  phoneNumber: number;
};

// const crush1: {
//   fullName: string;
//   age?: number;
//   address: string;
//   phoneNumber: number;
// } = {
//   fullName: "Jon",
//   age: 23,
//   address: "DHK",
//   phoneNumber: 124,
// };
const crush1: CrushType = {
  fullName: "Jon",
  address: "DHK",
  phoneNumber: 124,
};

const crush2: CrushType = {
  fullName: "Mon",
  age: 20,
  address: "SHY",
  phoneNumber: 759,
};

const crush3: CrushType = {
  fullName: "Ron",
  age: 24,
  address: "BAR",
  phoneNumber: 789,
};

type MaritalStatus = boolean;
const isMarried: MaritalStatus = false;

type enrolledStatus = string;
const enrolledCourse: enrolledStatus = "PH Next Level Development";


type OperationType = (x:number , y: number , z: number ) => number

const calculate = (
  num1: number,
  num2: number,
  num3: number,
  operation: OperationType
) => {
  return operation (num1, num2, num3);
};


const result1 =calculate(12,6,3, (x,y,z) => x*y+z);
const result2 =calculate(12,6,3, (x,y,z) => x-y*z);
const result3 =calculate(12,6,3, (x,y,z) => x*y*z);
console.log(result1,",", result2,",",result3);

