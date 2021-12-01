// Iteration 1: Names and Input
//

let hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Victoria";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length) {
    console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

let res1 = ""
let res2 = ""

for (let k = 0; k < hacker2.length-1; k++) {
    res1 += hacker2[k] + " ";
    console.log(res1);
}
res1 += hacker2[hacker2.length -1 ];



for (let k = hacker1.length - 1; k >= 0; k--) {
    res2 += hacker1[k];
    console.log(res2);
}

console.log(res1.toUpperCase());
console.log(res2);

k = 0;
let message= "What?! You both have the same name?";

    while ( hacker1[k] || hacker2[k]) {

    if (hacker1[k] === hacker2[k]) {
        k++
    }
    else if (hacker1[k] > hacker2[k]) { 
        message = hacker2 + " The driver's name goes first.";
        break

    } else { 
        message = hacker1 + " Yo, the navigator goes first definitely";
        break
    }

}

console.log(message)
