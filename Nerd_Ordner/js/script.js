// // 1. Variables and Datatypes
// var myVar = 2
// let user = "Alice"
// let user2 = "Bob"

// let greetings = ["Hello", "Bonsoir", "Moin"]

// greetings[0] = "Hi" 
// let isActive = false

// // 2. Built-in Console.log Function
// // console.log(myPets)

// // 3. Functions
// function hello (name) {
//     console.log(name)
// }
// hello("Bob")
// hello(user);

// 4. Simple DOM Manipulation
// document.body.innerHTML = user;

// 5. For-Loop
// for (let i=0; i<=2; i++ ){
//     console.log(greetings[i] + " " + myPets[i])
// }

// const myPets = ["bird", "cat", "dog"]

// for (let pet of myPets){
//     console.log(pet)
// }

// 6. DOM Manipulation
// document.getElementById("main").innerHTML = "CATS are gods!!!!" 

let paragraph1 = document.querySelector("p")
paragraph1.innerHTML = "Immer noch voll toll!"+"<br>"

// let myLink = document.createElement("a")
// myLink.innerHTML = "Wetter" 
// myLink.href = "http://wetter.com"
// myLink.target = "_blank"

// appendChild 
// document.body.appendChild(myLink)

// removeChild

/// Exercise

let myPets = ["bird", "fish", "dog"]
let myLinks = ["https://en.wikipedia.org/wiki/Bird","https://en.wikipedia.org/wiki/Dog", "https://en.wikipedia.org/wiki/Cat"]

for (let i=0; i<3; i++){
    //neues Element pro Tier erzeugen
    let animal = document.createElement("a")
    animal.innerHTML = myPets[i]
    animal.href = myLinks[i]
    animal.target = "_blank"

    // An existierendes Element dranhängen
    paragraph1.appendChild(animal)

    let btn = document.createElement("button")
    paragraph1.appendChild(btn)

    // Seitenumbruch pro Tier
    let br = document.createElement("br")
    paragraph1.appendChild(br)
}



// 7. Event Handlers


// 8. Event Listeners


// 9. Event Bubbling


// 10. Objects 


// 11. Forms

