const search = (value: string | null) => {
  if (value === null) {
    console.log( "Noting to Search");;
  } else {
    console.log("Searching ...");  
  }
};

search(null) // Since "strictNullChecks": true,


const getMyCarSpeed = (speed : unknown) =>{
    if(typeof speed === "number") {
        const convertedSpeed = speed*1000/3600
        console.log(`My Car Speed is ${convertedSpeed.toFixed(2)} m/s`);
    }
    else if(typeof speed === "string") {
        const [value , unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value)*1000)/3600
        console.log(`My Car Speed is ${convertedSpeed.toFixed(2)} m/s`);
    }

    else {
        console.log("Wrong Input");
    }

}

getMyCarSpeed(10)  // km/h to meter/sec
getMyCarSpeed("10 km/h")  // km/h to meter/sec
getMyCarSpeed(true)


function throwError (message : string) : never {
    throw new Error(message);
}

throwError("Something went wrong");