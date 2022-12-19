


let compliment = [];
const person = ['You','They','I','We']
const sense = ['Smell','Look','Feel','Taste','Sound']
const descriptor=['Good','Bad','Weird','Delightful','Bright']

const randomNum=(num)=>{
    return Math.floor(Math.random()*num)
    }
const generator=()=>{

    compliment.push(person[randomNum(person.length)]);
    compliment.push(sense[randomNum(sense.length)]);
    compliment.push(descriptor[randomNum(descriptor.length)]);
    output= compliment[0]+" "+compliment[1]+" "+compliment[2];
    return output;
}

console.log(generator())

//-----------------------------------------

let button = document.getElementById("generator");
let message = document.getElementById("message")

function showMessage(){
        let compliment = [];
    compliment.push(person[randomNum(person.length)]);
    compliment.push(sense[randomNum(sense.length)]);
    compliment.push(descriptor[randomNum(descriptor.length)]);
    message.innerHTML= compliment[0]+" "+compliment[1]+" "+compliment[2];

    button.innerHTML="More?"
}

button.onclick=showMessage;

