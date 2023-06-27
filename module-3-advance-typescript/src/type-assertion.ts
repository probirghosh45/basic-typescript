let data: any;
let data2: any;
data = "PHero is King!";
data2 = 457;
// type assertion
(data as string).length;
//  <string>data.length
 // ekhaane "as string " lekhar pore .length show korece , type script data er type detect korte pare ni

(data2 as number).toFixed; // same as data "as number" lekhar pore .toFixed show korece

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted Result is ${value} gram`;
  } else if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

// const result = kgToGram(5); 
// const result = kgToGram(5) as number; 
const result = <number>kgToGram(5); 

// typescript return type number e hobe bujte parcce na [result er upor hover kore jante parbo] , jehetu amra suru return type must be number e hobe tai "as number" likhe diyece . aivabe type mension kore daoya kei type assertion bole.

const result2 = kgToGram("5") as string; 
// const result2 = <string>kgToGram("5"); 

// "as string" na likhe "as number" likhle typescript return type k number e dhore nibe , typescript amader k bissas kore 😂

console.log(result);
console.log(result2);

type CustomErrorType = {
    message: string;
}

try {
} 
catch (error) {
    console.log((error as CustomErrorType).message);
}


