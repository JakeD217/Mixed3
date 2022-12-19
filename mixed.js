const randomNum=(num)=>{
return Math.floor(Math.random()*num)
}


let compliment = [];

const person = ['You','They','I','We']
const sense = ['Smell','Look','Feel','Taste','Sound']
const descriptor=['Good','Bad','Weird','Delightful','Bright']

const generator=()=>{

    compliment.push(person[randomNum(person.length)]);
    compliment.push(sense[randomNum(sense.length)]);
    compliment.push(descriptor[randomNum(descriptor.length)]);
    return compliment[0]+" "+compliment[1]+" "+compliment[2]
}

console.log(generator())


