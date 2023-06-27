const user: { 
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string;
  readonly company : "PHero"; 
} = {
  name: "John Doe",
  age: 20,
  isMarried: true,
  wife: "Rahima Bibi",
//   company : "PHero BD" 
company : "PHero"
};


// user.company = "PH BD" // company te access korte parbe na , since read only property;
