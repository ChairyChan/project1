// let aItems = [`T-shirt`, `Sweater`];
// let answer = prompt(`Welcome to our shop, what do you want (C, R, U, D)?`);

// if (answer == `C`)
// {
//     aItems.push(prompt(`Enter new item: `));
//     console.log(`Our items: `, ...aItems);
// }
// if (answer == `R`)
// {
//     console.log(`Our items: ${aItems}`);
// }
// if (answer == `U`)
// {
//     let aUItems = [];
//     let itemU = prompt(`Update position? `);
//     let newItem = prompt(`New item? `);
//     for (let i = 0; i < aItems.length; i++)
//     {
//         if (i+1 == itemU)
//         {
//             aUItems[i] = newItem;
//         }
//         else
//         {
//             aUItems.push(aItems[i]);
//         }
//     }
//     console.log(`Our items: `, ...aUItems);
// }
// if (answer == `D`)
// {
//     let aDItems = [];
//     let itemD = prompt(`Update position? `);
//     for (let i = 0; i < aItems.length; i++)
//     {
//         if (i == itemD)
//         {
//             continue;
//         }
//         aDItems.push(aItems[i]);
//     }
//     console.log(`Our items: `, ...aDItems);
// }


// var pokemon = {
//     name: "Pikachu",
//     stats:{
//         hp: 100,
//         level: 50,
//         attack: 86,
//         spattack: 150,
//         speed: 5000000000, 
//         belongTo: "Red"
//     },
// } 
// var pikachuSkill = ["Bite","Thunder Bolt","Volt Tackle","Thunderrrr!"];
// pokemon.stats.speed = 60;
// pokemon.skill = pikachuSkill;
// console.log(pokemon);


// var Pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle",
// "Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata"]
// Pokemon.pop();
// Pokemon.unshift("Meow");
// console.log(Pokemon);


//x^2-5x+6
//object with status of delta and solutions are in an array
// function deltaCalc(a, b, c){
//     let delta = b * b - 4 * a * c;
//     let status = ``;
//     let aSolution = []; 
//     if (delta < 0)
//     {
//         status = `negative`;
//     } 
//     if (delta == 0) 
//     {
//         status = `0`;
//         let x = - b / (2 * a);
//         aSolution.push(x);
//         aSolution.push(x.toFixed(2));
//     }
//     if (delta > 0) 
//     {
//         status = `positive`;
//         let x1 = (-b - Math.sqrt(delta)) / (2 * a);
//         aSolution.push(x1.toFixed(2));
//         let x2 = (-b + Math.sqrt(delta)) / (2 * a);
//         aSolution.push(x2.toFixed(2));
//     }
//     let solution = {
//         status: status,
//         solution : aSolution
//     }
//     return solution;
// }
// console.log(deltaCalc(3, -8, 5));





// // Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];
// function lookUpProfile(name, prop){
//     for (let i = 0; i < contacts.length; i++){
//         if (name == "firstName")
//         {
//             if (property == "lastName")
//             {
//                 return contacts.lastName;
//             }
//             else if (property == "likes")
//             {
//                 return contacts.likes;
//             }
//             else if (property ==  "number")
//             {
//                 return contacts.number;
//             }
//         }
//     }
// }
// let name = prompt(`First name? `);
// let property = prompt(`Property to check? `);
// console.log(lookUpProfile(name, property));



//3/22/20
// function isPrime(n){
//     if (n == 0)
//     {
//         return false;
//     }
//     if (n == 1)
//     {
//         return false;
//     }
//     if (n % 2 == 0)
//     {
//         if (n == 2)
//         {
//             return true;
//         }
//         return false;
//     }
//     else
//     {
//         for(let i = 3; i < n; i++)
//         {
//             if(n % i == 0)
//             {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// function printPrime(n){
//     for(let i = 0; i < n+1; i++)
//     {
//         if (isPrime(i) == true)
//         {
//             console.log(i);
//         }
//     }
// }
// printPrime(80);

// function factorize(n){
//     let i = 2;
//     while (i < n+1)
//     {
//         if (n % i == 0)
//         {
//             console.log(i);
//             console.log(" ");
//             n = n/i;
//         }
//         else
//         {
//             i++;
//         }
//     }
// }
// factorize(144);


// function factorial(num) {
//     let ans = 1;
//     for (let i = 1; i < num+1; i++)
//     {
//         ans = ans * i;
//     }
    
//     return ans;
// }
// console.log(factorial(5));


function removeDollarSign(text){
    for(let i = 0; i < text.length; i++)
    {
        if (text.charAt(i) == `$`)
        {
            continue;
        }
        console.log(text.charAt(i));
    }
};
removeDollarSign('$80% percent of $life is to show $up')
