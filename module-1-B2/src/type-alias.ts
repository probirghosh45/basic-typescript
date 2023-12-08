type Student = {
    name : string,
    age : number,
    gender : string,
    contactNo? : string,
    address : string
}

  const student1:Student = {
    name: "ss",
    age: 23,
    gender: "m",
    contactNo: "22",
    address: "cs",
  };

  const student2 : Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  const student3 : Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const UserName : UserName = "PK";
  const IsAdmin : IsAdmin = true;


  type AddNumber = (num1:number , num2:number) => number
  const Add:AddNumber = (num1 , num2) => num1+num2

