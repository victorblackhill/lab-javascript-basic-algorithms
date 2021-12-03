// Iteration 1: Names and Input
//

let hacker1 = "Hernan";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Victor";
console.log(`The navigator's name is ${hacker2}`);

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
}
res1 += hacker2[hacker2.length -1 ];



for (let k = hacker1.length - 1; k >= 0; k--) {
    res2 += hacker1[k];}

k = 0;
let message= "What?! You both have the same name?";

    while ( hacker1[k] || hacker2[k]) {

    if (hacker1[k] === hacker2[k]) {
        k++
    }
    else if (hacker1[k] > hacker2[k]) { 
        message = hacker1 + " The driver's name goes first.";
        break

    } else { 
        message = hacker2 + " Yo, the navigator goes first definitely";
        break
    }

}

console.log(message)

// Bonus 1

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel auctor ex, congue mattis velit. Cras faucibus vel lacus ac interdum. Etiam quis leo nulla. Morbi sagittis vitae ligula vitae pretium. Praesent id arcu in felis tincidunt aliquam. Mauris interdum sit amet risus eleifend egestas. Nulla vel odio finibus, varius arcu eu, porta augue. Vivamus consectetur eget elit a tristique. Nulla condimentum pellentesque sem, ut iaculis sapien volutpat sed. Pellentesque non mauris non enim ultricies congue in vel quam.

Morbi aliquam diam ac mi pulvinar, eget lobortis justo aliquam. Phasellus sodales augue in felis imperdiet mollis. Donec sit amet turpis enim. Mauris ante arcu, malesuada sollicitudin suscipit et, euismod vitae dui. Maecenas vel arcu at turpis egestas viverra quis eget urna. Nullam at pharetra erat. Cras convallis orci velit, sed fermentum sapien luctus at. Vivamus auctor rhoncus nulla, a consequat velit posuere nec. Mauris dignissim est dui, vel tempus ligula rhoncus eu. Vestibulum euismod lacus vitae enim pellentesque dignissim. Duis rutrum sollicitudin nibh, ac varius libero tempus volutpat. Donec vitae eros mattis, pellentesque eros non, bibendum dolor. Donec sed posuere lacus. Nulla a augue justo.

Mauris interdum diam id nibh tincidunt, id volutpat neque ultricies. Sed porttitor velit eget magna ullamcorper convallis. Donec ac imperdiet mi, id gravida nunc. Cras auctor bibendum fermentum. In et eros dapibus, pulvinar tellus laoreet, venenatis nulla. Suspendisse potenti. Etiam et nunc vel orci finibus suscipit. Vivamus ut ullamcorper dolor. Cras interdum varius orci. Suspendisse sit amet aliquam felis, sit amet laoreet tellus. Ut et convallis lorem.`

paragraphs.toLowerCase();

let count = 0;
   
    for(let k=0 ; k < paragraphs.length; k++) {
        if (  
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === " ")
        ||
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === "," )
        ||
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === ".")
                ||
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === ".")

        )
        {
            count ++;

        }    
    }

    if (paragraphs[0] === "e" && paragraphs[1] === "t" && paragraphs[2] === " " ) {
        count ++;
    }


console.log(count);

// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
//let phraseToCheck = "Amor, Roma";

let orderedPhrase = ""

for (let i = 0; i < phraseToCheck.length; i++) {
    if (
        (phraseToCheck[i] !== " ") 
        &&
        (phraseToCheck[i] !== ",")
        &&
        (phraseToCheck[i] !== "?")
       ) 
        {
            orderedPhrase += phraseToCheck[i]
        }
}

orderedPhrase = orderedPhrase.toLowerCase();



let reversedPhrase = "";

for (let i = phraseToCheck.length -1; i >= 0 ; i--) {
    if (
        (phraseToCheck[i] !== " ") 
        &&
        (phraseToCheck[i] !== ",")
        &&
        (phraseToCheck[i] !== "?")
       ) 
        {
            reversedPhrase += phraseToCheck[i];
        }
}

reversedPhrase = reversedPhrase.toLowerCase();  

let isPalindrome = true;

for (let i = 0; i < reversedPhrase.length; i++) {
    if ( reversedPhrase[i] === orderedPhrase[i]) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
}

console.log(isPalindrome);