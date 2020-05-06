class Card {
    constructor (name, cost,img) {
        this.name = name;
        this.cost = cost;
        this.img = img;
    }
}

class Unit extends Card {
    constructor(name, cost, img, power, res) {
        super(name, cost, img);
        this.power = power;
        this.res = res;
    }
    display(){
        console.log("*****************************")
        console.log(`${this.name}- cost: ${this.cost}, power: ${this.power}, resiliance: ${this.res}`);
        return this;
    }
    attack(target){
        // reduce target res by power
        console.log("*****************************")
        console.log(`${this.name} attacks ${target.name}`)
        if ( target.res === this.power){
            console.log('draw')
        }
        else if (target.res < this.power){
            console.log(`${this.name} win`)
        }
        else if (target.res > this.power){
            console.log(`${this.name} lose`)
        }
        return this;
    }
}

class Effect extends Card {
    constructor(name, cost, img, stat, magnitude) {
        super(name, cost, img);
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        //reduce target stat by magnitude
        console.log("*****************************")
        console.log(`${this.name} targeted ${target.name}`)
        if(this.stat === 'p'){
            target.power += this.magnitude;
            if (this.magnitude<0){
                console.log(`${target.name}'s power lost ${-this.magnitude}`)
            }
            else {
                console.log(`${target.name}'s power gain ${-this.magnitude}`)
            }
        }
        else if (this.stat ==='r'){
            target.res += this.magnitude;
            if (this.magnitude<0){
                console.log(`${target.name}'s resiliance lost ${-this.magnitude}`)
            }
            else {
                console.log(`${target.name}'s resiliance gain ${-this.magnitude}`)
            }
            }
        return this;
        }

    display(){
        console.log("*****************************")
        console.log(`${this.name}- cost: ${this.cost}, stat: ${this.stat}, magnitude: ${this.magnitude}`)
        return this;
    }
}
const pikachu_url = "https://secure.img1-ag.wfcdn.com/im/68817757/resize-h500-w500%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg"
const charmander_url = "https://i.pinimg.com/564x/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.jpg"
const energyboost_url = "https://cdn3.iconfinder.com/data/icons/tobacco-nature-drugs-1/64/28-512.png"
const trap_url = "https://cdn0.iconfinder.com/data/icons/exterminator-cartoon-style/512/al370_8-512.png"

const pikachu = new Unit ('Pikachu', 3, pikachu_url, 15, 14);
const trap = new Effect('Trap', 2, trap_url, 'r', -5);
const charmander = new Unit ('Charmander', 3, charmander_url,14, 10);
const energyboost = new Effect('Energy Boost', 3, energyboost_url, 'p', 4);
// console.log(pikachu.constructor.name)
// charmander.attack(pikachu)
// trap.play(pikachu)
// pikachu.display()
// charmander.attack(pikachu)

var hand = [pikachu,charmander,energyboost];
var desk = [trap];
var deskDiv = document.getElementById("desk");
var handDiv = document.getElementById("hand");

function draw(a){
    display="";
    for (let i in a){
        if (a[i].constructor.name==="Unit"){ 
        display +=`<div class= 'container ${a[i].constructor.name}'>
                            <div class="title">${a[i].name}</div>
                            <div class="picture"><img src='${a[i].img}'></div>
                            <div class="text">
                            <p>Power: ${a[i].power}</p> 
                            <p>Resiliance: ${a[i].res}</p> 
                            </div>
                        </div>`
        console.log('unit run')
        }
        else if (a[i].constructor.name==="Effect"){
        display +=`<div class= 'container ${a[i].constructor.name}'>
                        <div class="title">${a[i].name}</div>
                        <div class="picture"><img src='${a[i].img}'></div>
                        <div class="text"> Effect details</div>
                    </div>`    
        console.log('effect run')
        }
        console.log(i)
    }
    console.log(display)
    
    if (a===hand){
    handDiv.innerHTML=display
    }
    else if(a===desk){
    deskDiv.innerHTML=display;
    }
}
draw(hand);
draw(desk)