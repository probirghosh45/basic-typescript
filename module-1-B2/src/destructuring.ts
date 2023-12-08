const user2 = {
  id : 345,
  name  : {
    fName : 'John',
    middleName : 'dd',
    lastName : 'SSD',
  },
  contactNumber : '123',
  address : "Bhola"
}

const {
    contactNumber,
    name : {middleName: midName}, 
} = user2

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [,,bestFriends,...rest] = myFriends
//  ,, diye prothom 2ta element k skip korlam then ross k nilam ... rest diye  baki gulo ko nilam akta varibale a nilam

