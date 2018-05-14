function DigitalPal (){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if(this.hungry===true){
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {console.log("No thank you.")}
    }
    this.sleep = function(){
        if (this.sleepy===true){
            console.log("zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.age += 1;
        } else {
            console.log("NO! I'm not sleepy!")
        }
    }
    this.play = function(){
        if (this.bored===true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
    }
}