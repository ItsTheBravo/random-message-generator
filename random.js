console.log("Welcome to random message generator!");

let variables = { 
adjectives: ["Sick", "Naked", "Deep", "Fluffy", "Greedy"],
names: ["John", "Adam", "Kelly", "Barry", "Grace"],
nouns: ["Sheep", "Fish", "Apparatus", "Rice", "Aircraft"],
numbers: ["2", "3", "4", "5", "6", "7"],
body_parts: ["Arm", "Leg", "Head", "Foot", "Hand"],
clothes: ["T-shirt", "Jacket", "Pants", "Shoes", "Hat"],
}


let phrase1 = variables.adjectives[Math.floor(Math.random() * variables.adjectives.length)];
let phrase2 = variables.names[Math.floor(Math.random() * variables.names.length)];
let phrase3 = variables.nouns[Math.floor(Math.random() * variables.nouns.length)];

console.log(`Your secret message is ${phrase1} ${phrase2} ${phrase3}`);