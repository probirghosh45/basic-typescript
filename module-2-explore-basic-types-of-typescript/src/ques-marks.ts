const marks: number = 45;

if (marks < 33) {
  console.log("Fail");
} else {
  console.log("Pass");
}

// ternary operator
const longevity: number = 15;
const isAdult = longevity < 33 ? "Teenaged " : "Adult";

console.log(isAdult);

//Nullish coalescing operator
// null and undefined

// logic : value jodi null / undefined hoy tahole hard coded data dekhabe .
const isAuthenticateUser = null;
const userInfo = isAuthenticateUser ?? "Guest";
console.log(userInfo);

type UserType = {
  fullName: string;
  result: string;
  address: {
    city: "No City" | string;
    road: "No Road" | string;
    home?: "" | string; //optional type
  };
};

const user1 : UserType = {
  fullName: "GH",
  result: "Passed",
  address: {
    city: "No City",
    road: "No Road",
  },
};

const user2 : UserType = {
  fullName: "GH",
  result: "Failed",
  address: {
    city: "Dhaka",
    road: "TV Road",
    home: "Sweet Cottage",
  },
};

const userHomeInfo = user1?.address?.home ?? "Home info not mentioned"
console.log(userHomeInfo);