class Person {
    constructor(name = 'N/A', age = 0) {
        //console.log(name);
        this.name = name;
        this.age = age;
    }

    getGretting() {
        //return 'Hi, ' + this.name +'!';
        //below is an es6 template string
        return `Hi. I am ${ this.name }!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age); //used to call the parent constructor
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`

        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }

 
    getGretting() {
        let gretting = super.getGretting();

        if(this.homeLocation){
            gretting += ` I'm visiting from ${this.homeLocation}.`
        }
       

        return gretting;

    }
}

const me = new Traveler('Joe Moore', 'Cornwall');
const other = new Traveler();
console.log(me.getGretting());
console.log(other.getGretting());
