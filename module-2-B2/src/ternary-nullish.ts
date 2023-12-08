
// ternary operator
const age = 10;
if (age >=18) {
    console.log("Adult");
} else {
    console.log("not Adult");
}

const isAdult = age >=18 ? "Adult" : "Child";
console.log(isAdult);

// nullish coalescing operator
// null / undefined --> decision making

const isAuthenticated = ""; // undefined,null

const result1 = isAuthenticated  ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
// console.log({result1},{result2});


type User2 = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };

  const user5: User2 = {
    name: "DD",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentaddress: "ctg town",
    },
  };

  const permanentAddress = user5?.address?.permanentAddress ?? "No Data Available"
//   console.log(permanentAddress);