//arguments object - no longer bound with arrow functions
const add = (a, b)  => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1));
//this keyword - no longer bound

const user = {
    name: 'Joe',
    cities: ['Troon', 'Redruth', 'Camborne'],
    printPlacesLived() {
        //const that = this;
        //console.log(this.name);
        //console.log(this.cities);
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        //this.cities.forEach((city) => {
           // console.log(this.name + ' has lived in ' + city);
       // });
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [33, 18,16,89],
    multiplyBY: 14,
    multiply() {
        return this.numbers.map((number) => this.multiplyBY * number);
    }
};
console.log(multiplier.multiply());