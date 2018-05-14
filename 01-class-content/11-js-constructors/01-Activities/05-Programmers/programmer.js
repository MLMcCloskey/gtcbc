function Programmer(
    name,
    job,
    age,
    language,
){
    this.name = name;
    this.job = job;
    this.age = age;
    this.language = language;
};

Programmer.prototype.printInfo = function(){
    console.log("Name: "+this.name+"/n Occupation: "+this.job)
}

Programmer.prototype.printInfo();