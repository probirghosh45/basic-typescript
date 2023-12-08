type FrontEndDev = 'rr' | 'jr';
type FullStackDev = 'dd' | 'ww';

type Developer = FrontEndDev | FullStackDev
const newDev : FrontEndDev = 'jr';

type User ={
    name: string;
    email?: string;
    gender:"male"| "female";
    bloodGroup:"O+"|"A+"|"AB+"
  }

  const user1: User ={
    name:'RR',
    gender:'male',
    bloodGroup:'O+'
  }


  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper : FullStackDeveloper = {
    skills: ["FF","ww","pp"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
  }