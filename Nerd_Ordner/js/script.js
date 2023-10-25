// // // 1. Variables and Datatypes
// // var myVar = 2
// // let user = "Alice"
// // let user2 = "Bob"

// // let greetings = ["Hello", "Bonsoir", "Moin"]

// // greetings[0] = "Hi" 
// // let isActive = false

// // // 2. Built-in Console.log Function
// // // console.log(myPets)

// // // 3. Functions
// // function hello (name) {
// //     console.log(name)
// // }
// // hello("Bob")
// // hello(user);

// // 4. Simple DOM Manipulation
// // document.body.innerHTML = user;

// // 5. For-Loop
// // for (let i=0; i<=2; i++ ){
// //     console.log(greetings[i] + " " + myPets[i])
// // }

// // const myPets = ["bird", "cat", "dog"]

// // for (let pet of myPets){
// //     console.log(pet)
// // }

// // 6. DOM Manipulation
// // document.getElementById("main").innerHTML = "CATS are gods!!!!" 

// let paragraph1 = document.querySelector("p")
// paragraph1.innerHTML = "Immer noch voll toll!"+"<br>"

// // let myLink = document.createElement("a")
// // myLink.innerHTML = "Wetter" 
// // myLink.href = "http://wetter.com"
// // myLink.target = "_blank"

// // appendChild 
// // document.body.appendChild(myLink)

// // removeChild

// /// Exercise

// let myPets = ["bird", "fish", "dog"]
// let myLinks = ["https://en.wikipedia.org/wiki/Bird","https://en.wikipedia.org/wiki/Dog", "https://en.wikipedia.org/wiki/Cat"]

// for (let i=0; i<3; i++){
//     //neues Element pro Tier erzeugen
//     let animal = document.createElement("a")
//     animal.innerHTML = myPets[i]
//     animal.href = myLinks[i]
//     animal.target = "_blank"

//     // An existierendes Element dranhängen
//     paragraph1.appendChild(animal)

//     let btn = document.createElement("button")
//     btn.innerHTML = "click"
//     paragraph1.appendChild(btn)

//     // Seitenumbruch pro Tier
//     let br = document.createElement("br")
//     paragraph1.appendChild(br)
// }



// // 7. Event Handlers
let isVisible = true; 

function showImg(){
    let img = document.querySelector("img")
    isVisible = !isVisible
    if (!isVisible){
        document.body.removeChild(img)
    }else {
        img = document.createElement("img") 
        img.src="grumpy.png"
        document.body.appendChild(img)
    }
}

// Exercise: 1. Erzeuge ein neues Bild-Element (createElement)
// 2. Hänge dieses an ein existierendes Tag in der HTML DATEI an 
// (querySelector, appendChild)

// 1.
let img2 = document.createElement("img")
img2.src="grumpy.png"
img2.alt="Grumpy was here"

// 2.
let container = document.querySelector("p")
container.appendChild(img2)

// // 8. Event Listeners

let btn = document.getElementById("bn")
btn.addEventListener("click", showImg )


// // 9. Event Bubbling


// // 10. Objects

let Lasagna = {
    name: "Lasagna",
    taste: 10,
    calories: 2000,
}

let Brokkoli = {
    name: "Brokoli",
    taste: -2,
    calories: 10,
}

let Grumpy = {
    name:"Grumpy",
    happiness:2,
    weight: 5,

    eat: function (food){
        this.happiness += food.taste;
        this.weight += food.calories/7000
    }
}

Grumpy.eat(Brokkoli)

document.getElementById("main").innerHTML = Grumpy.happiness

let weightLabel = document.createElement("div")
weightLabel.id = "weightLabel" 
weightLabel.innerText = "Grumpy's weight: "
document.getElementById("main").appendChild(weightLabel)

let weight = document.createElement("p")
weight.id = "weight"
document.getElementById("main").appendChild(weight)
document.getElementById("weight").innerHTML = "<a href='http://weightwatchers.com'>"+Grumpy.weight.toFixed(2)+ "</a>"





// // 11. Forms

