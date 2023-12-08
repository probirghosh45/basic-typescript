// string
const dataType: string = "45"

//number
const dataType2: number = 45;

// boolean
const dataType3: boolean = true;


let dataInfo:number
dataInfo = 77;

let friends : string [] = ["a", "b", "c", "d"];
let roll: number[] = [1,5]
roll.push(88)

// tuple -> array > order > type of value.

let coOrdinate: [number,string] = [45,"PK"]
let Info : [string,number] = ["DD",45]
Info[0] = "SS";

// reference type
const user : {
    fName : string,
    mName? : string, //optional type
    lName : string
} =  {
    fName : "Shakib",
    // mName : "AL",
    lName : "Hasan"
}

const userInfo:{
company : "PHero", //literal type
// readonly company : string
fname : string,
lName : string
} ={
    company : "PHero",
    fname : "Mir",
    lName : "Hossain"
}

// userInfo.company = "PHero";




