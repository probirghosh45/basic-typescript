type NoobDev = {
  fullName: string,
}

type JuniorDev = NoobDev & { //intersection type = &
    expertise : string,
    experience : number
}


enum Level {
    BEGINNER,                  // Default Value for Beginner = 0 , Intermediate = 1 , Expert = 2
    INTERMEDIATE,
    EXPERT
}

type nextLevelDev = JuniorDev & { 
    leadershipExperience : number ,
    // level : "Junior | Mid | Senior"
    level : Level
}

const newDev : NoobDev | JuniorDev = {  // union type = |
    fullName: 'John Smith',
    expertise : "Javascript",
    experience : 2
}


const developer : nextLevelDev = {
    fullName: 'John Smith',
    expertise : "Javascript",
    experience : 2,
    leadershipExperience : 1,
    // level : "Junior"
    level : Level.EXPERT
}



