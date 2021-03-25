console.log("Welcome to random message generator!");
let randomNum = (num) => {
    let words = num[Math.floor(Math.random() * num.length)];
    return words;
};

let variables = { 
adjectives: ["Sick", "Naked", "Deep", "Fluffy", "Greedy"],
names: ["John", "Adam", "Kelly", "Barry", "Grace"],
nouns: ["Sheep", "Fish", "Apparatus", "Rice", "Aircraft"],
numbers: ["2", "3", "4", "5", "6", "7", "8"],
body_parts: ["Arm", "Leg", "Head", "Foot", "Hand"],
clothes: ["T-shirt", "Jacket", "Pants", "Shoes", "Hat"],
colours: ["Red", "Blue", "Green", "Yellow", "Purple"],
};

let phrases = {
    phr: [`Signs point to a very ${randomNum(variables.adjectives)} yes.`,
     `The skies are ${randomNum(variables.adjectives)}. The future is uncertain.`,
    `I see ${randomNum(variables.numbers)} big ${randomNum(variables.nouns)} in your future.`,
    `What does your ${randomNum(variables.body_parts)} tell you?`,
    `Signs point to a very ${randomNum(variables.adjectives)} no.`,
    `Picture a/an ${randomNum(variables.adjectives)} ${randomNum(variables.nouns)}. That is your answer`,
    `You will find the answer in your ${randomNum(variables.clothes)}.`,
    `Dont believe anything ${randomNum(variables.names)} says.`,
    `Signs point to a very ${randomNum(variables.adjectives)} Yes.`]
}

function results() {
    let result = phrases.phr[Math.floor(Math.random() * phrases.phr.length)];
    return `Your answer is: ${result}
 Your lucky number is: ${randomNum(variables.numbers)}
 Your special colour is: ${randomNum(variables.colours)}`;
}

console.log(results());