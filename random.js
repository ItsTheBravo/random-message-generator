console.log("Welcome to random message generator!");

let variables = { 
option1: ["spaghet", "molk", "goop"],
option2: ["TV", "can", "ps5"],
option3: ["blanket", "cola", "basket"]
}


let phrase1 = variables.option1[Math.floor(Math.random() * variables.option1.length)];
let phrase2 = variables.option2[Math.floor(Math.random() * variables.option2.length)];
let phrase3 = variables.option3[Math.floor(Math.random() * variables.option3.length)];

console.log(`Your secret message is ${phrase1} ${phrase2} ${phrase3}`);