var nameVar = 'Joe';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Smith';
console.log('nameLet', nameLet);

const nameConst = 'Mary';
console.log('NameConst', nameConst);

//Block Scoping

const fullName = 'Joe Moore';

let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);