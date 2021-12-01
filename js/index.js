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

// Bonus 1

let paragraphs = `et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel auctor ex, congue mattis velit. Cras faucibus vel lacus ac interdum. Etiam quis leo nulla. Morbi sagittis vitae ligula vitae pretium. Praesent id arcu in felis tincidunt aliquam. Mauris interdum sit amet risus eleifend egestas. Nulla vel odio finibus, varius arcu eu, porta augue. Vivamus consectetur eget elit a tristique. Nulla condimentum pellentesque sem, ut iaculis sapien volutpat sed. Pellentesque non mauris non enim ultricies congue in vel quam.

Morbi aliquam diam ac mi pulvinar, eget lobortis justo aliquam. Phasellus sodales augue in felis imperdiet mollis. Donec sit amet turpis enim. Mauris ante arcu, malesuada sollicitudin suscipit et, euismod vitae dui. Maecenas vel arcu at turpis egestas viverra quis eget urna. Nullam at pharetra erat. Cras convallis orci velit, sed fermentum sapien luctus at. Vivamus auctor rhoncus nulla, a consequat velit posuere nec. Mauris dignissim est dui, vel tempus ligula rhoncus eu. Vestibulum euismod lacus vitae enim pellentesque dignissim. Duis rutrum sollicitudin nibh, ac varius libero tempus volutpat. Donec vitae eros mattis, pellentesque eros non, bibendum dolor. Donec sed posuere lacus. Nulla a augue justo.

Mauris interdum diam id nibh tincidunt, id volutpat neque ultricies. Sed porttitor velit eget magna ullamcorper convallis. Donec ac imperdiet mi, id gravida nunc. Cras auctor bibendum fermentum. In et eros dapibus, pulvinar tellus laoreet, venenatis nulla. Suspendisse potenti. Etiam et nunc vel orci finibus suscipit. Vivamus ut ullamcorper dolor. Cras interdum varius orci. Suspendisse sit amet aliquam felis, sit amet laoreet tellus. Ut et convallis lorem.`

//on initialise le compteur à 0

paragraphs.toLowerCase();

let count = 0;

    for(let k=0 ; k < paragraphs.length; k++) {
        if (
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === " ")
        ||
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === "," )
        ||
        (paragraphs[k] === " " && paragraphs[k + 1] === "e" && paragraphs[k + 2] === "t" && paragraphs[k + 3] === ".")
        )
        {
            count ++;
            console.log(k / paragraphs.length * 100);

        }    }

console.log(count);