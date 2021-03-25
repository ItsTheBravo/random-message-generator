console.log("Welcome to random message generator!");

let variables = { 
adjectives: ["Sick", "Naked", "Deep", "Fluffy", "Greedy"],
names: ["John", "Adam", "Kelly", "Barry", "Grace"],
nouns: ["Sheep", "Fish", "Apparatus", "Rice", "Aircraft"],
numbers: ["2", "3", "4", "5", "6", "7"],
body_parts: ["Arm", "Leg", "Head", "Foot", "Hand"],
clothes: ["T-shirt", "Jacket", "Pants", "Shoes", "Hat"],
};


let adj = variables.adjectives[Math.floor(Math.random() * variables.adjectives.length)];
let names = variables.names[Math.floor(Math.random() * variables.names.length)];
let nouns = variables.nouns[Math.floor(Math.random() * variables.nouns.length)];
let numbers = variables.numbers[Math.floor(Math.random() * variables.numbers.length)];
let body_parts = variables.body_parts[Math.floor(Math.random() * variables.body_parts.length)];
let clothes = variables.clothes[Math.floor(Math.random() * variables.clothes.length)];

let phrases = {
    phr: [`Signs point to a very ${adj} yes.`,
     `The skies are ${adj}. The future is uncertain.`,
    `I see ${numbers} big ${nouns} in your future.`,
    `What does your ${body_parts} tell you?`,
    `Signs point to a very ${adj} no.`,
    `Picture a/an ${adj} ${nouns}. That is your answer`,
    `You will find the answer in your ${clothes}.`,
    `Don't believe anything ${names} says.`,
    `Signs point to a very ${adj} Yes.`]
}


let result = phrases.phr[Math.floor(Math.random() * variables.clothes.length)];
console.log(`Your answer is: ${result}` );