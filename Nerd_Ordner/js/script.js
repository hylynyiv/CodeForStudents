// Variable and Datatypes
var myVar = 2
let user = "Alice"
let user2 = "Bob"
const myPets = ["bird", "cat", "dog"]
let isActive = false

// Built-in Console.log Function
console.log(myPets)

// Functions
function hello (name) {
    console.log(name)
}
hello("Bob")
hello(user);

/// Simple DOM Manipulation
// document.body.innerHTML = `
// <article>
// <h1> Hello World </h1>
// <p> Dolor sic amet </p>
// <img src="grumpy.png">
// </article>
// `

let myDoc = `
<article>
<h1> Hello ${user} </h1>
<p> Dolor sic amet </p>
<img src="grumpy.png">
</article>
`

let myDoc2 = `
<ol>
    <li>Mo</li>
    <li>Di</li>
    <li>Mi</li>
    <li>Do</li>
    <li>Fr</li>
</ol>    
`
let myDoc3 = `
<table>
    <tr>
        <th></th>
        <th>Jan</th>
        <th>Feb</th>
        <th>Mar</th>
    </tr>
    <tr>
        <td>Mo</td>
        <td></td>
        <td></td>
        <td></td>
        
    </tr>
    <tr>
        <td>Di</td>
        <td>Fencing</td>
        <td>Horse Riding</td>
        <td>Geography</td>
    </tr>
    <tr>
        <td>Mi</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Do</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Fr</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
`
// document.body.innerHTML = myDoc;


//For-Loop

let days = ["mo","di","mi","do","fr"]
let months = ["jan","feb","mar"]

let myDoc4 = " ";

for (let month of months){
    myDoc4 += `<th> ${month} </th>`
}

function createDoc(doc){
    document.body.innerHTML = 
        `<table><tr>` 
        + doc 
        + `</tr></table>`
    ;
}

// createDoc(myDoc4)

// DOM Manipulation
// 1. getElementById 

let headline = document.getElementById("mainh1")
headline.innerHTML = "WOOOOOOOHOOOO"

// 2. querySelector
let paragraph1 = document.querySelector("p")
paragraph1.innerText = "Wir haben das gerade geändert!"

let paragraph2 = document.querySelectorAll("p")[1]
paragraph2.innerText = "Nun ändern wir nochmal!"

//3. createElement 
let myLink = document.createElement("a")
myLink.href = "https://haveibeenpwned.com/"
myLink.innerHTML = "Check if your email is save."
myLink.target = "_blank"

//4. appendChild 

document.body.appendChild(myLink);

//5. removeChild

document.body.removeChild(myLink)

// EVENT HANDLERS 
let isVisible = true;

function showLink(){
    let btn = document.getElementById("btn")    
        isVisible = !isVisible;
        if (!isVisible){
            document.body.removeChild(myLink)
        }else {
            document.body.append(myLink)
        }
}

// EVENT LISTENERS
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", showLink)

// Event Bubbling
let favs = document.getElementById("favs")
favs.addEventListener('click', function(event){
    document.querySelector("marquee").innerHTML = event.target.textContent
    Grumpy.eat(event.target.getAttribute('data'))
    document.getElementById("weight").innerText = Grumpy.weight.toFixed(2)
})


// Objects 

let Lasagna = {
    name: "Lasagna",
    taste: 10,
    calories: 2000,
    difficulty: 5
}

let Chips = {
    name: "Chips",
    taste: 8,
    calories: 1000,
    difficulty: 1
}

let Brokkoli = {
    name: "Brokkoli",
    taste: -2,
    calories: 5,
    difficulty: 5
}

let Grumpy = {
    name: "Grumpy",
    happiness: 2,
    age: 12,
    weight: 5,
    favoriteFoods: [Lasagna,Chips,Brokkoli],
    eat: function (foodName){
        let food = this.getFoodByName(foodName);
        this.weight += food.calories/7700
    },
    getFoodByName: function (foodName){
        for(let food of this.favoriteFoods){
            if(food.name === foodName){
                return food;
            }
        }
    }
}


// FORMS

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const desert = document.querySelector('input[name="desert"]:checked').value

    paragraph2.innerText = username + " wants " + desert + ".";
})