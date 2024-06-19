class Personal {
    constructor (name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    outputInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const personal1 = new Personal('Eva', 25, 'Belarus');
const personal2 = new Personal('Adam', 30, 'Russia');

personal1.outputInfo();
personal2.outputInfo();