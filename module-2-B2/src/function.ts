function add (num1: number, num2: number): number {
    return  num1 + num2;
}

add(2,3)

const ArrFunc = (num1: number , num2: number): number => num1+num2;

// object > function > method

const userFunc = {
    name : "Rahim",
    balance : 100,
    addBalance (balance: number) : string{
        // return (this.balance+balance);
        return (`My balance is ${this.balance+balance}`)        
    }
}