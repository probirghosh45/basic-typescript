const std1:string[] = ["a", "b", "c"];
const std2:string[] = ["p", "q", "r"];

// std1.push(std2);
// spread operator
std1.push(...std2);

const mentors1 = {
    typescript : "pp",
    redux : "ee",
    dbms : "nz"
}

const mentors2 = {
    prisma : "ww",
    next : "gg",
    cloud : "ll"
}

// rest operators
const greetings = (...students:string[]) => {
    console.log(`Hi ${std1} ${std2}`);
}

