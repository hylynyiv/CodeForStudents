function showMessage(){
    alert("Hello World!");
}
document.addEventListener('DOMContentLoaded', () => {
    const chonkyCat = document.getElementById("chonkyCat");
    let newDiv = null;

    chonkyCat.addEventListener("mousemove", function(event){
        console.log("Found chonkyCat"); 
    
        if (!newDiv){
            newDiv = document.createElement("div");
            newDiv.classList.add("newDiv");
            newDiv.innerHTML = "Do not touch the cat.";
            // newDiv.style.position = "absolute";
            // newDiv.style.width = "50px";
            // newDiv.style.height = "50px";
            // newDiv.style.backgroundColor = "rgba(200, 0, 200, 0.5)";
            // newDiv.style.padding = "15px";
            // newDiv.style.pointerEvents = "none";
            
            Object.assign(newDiv.style, {
                position: "absolute",
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(200, 0, 200, 0.5)",
                padding: "15px",
                pointerEvents: "none",
                borderRadius: "5px",
            });

            document.body.appendChild(newDiv);    
        }

        newDiv.style.left = `${event.pageX}px`; // equivalent to newDiv.style.left = event.pageX + "px";
        newDiv.style.top = `${event.pageY}px`;
    })

    chonkyCat.addEventListener("mouseleave", () => {
        if (newDiv){
            newDiv.remove();
            newDiv = null;
        }
    })

    let foods = ["banana", "brokkoli", "apple", "ananas"];

    for (food of foods){
        let item = document.createElement("div");
        item.innerText = food;
        document.getElementById("favFoods").appendChild(item);
        
    }

    let isVisibleFoods = false;
    let isVisibleN = false;

    const ybtn = document.getElementById("yes");
    ybtn.addEventListener("click", () => {
        document.getElementById("favFoods").style.display = "block";
        isVisibleFoods = true;
        if(isVisibleN){
            isVisibleN = false;
            document.getElementById("NotSoMuch").style.display = "none";
        }
    })

    const nbtn = document.getElementById("no");
    nbtn.addEventListener("click", () => {
        if(isVisibleFoods){
            document.getElementById("favFoods").style.display = "none";
            isVisibleFoods = false;
        }
        else {
            document.getElementById("NotSoMuch").innerText = "Never mind."
            document.getElementById("NotSoMuch").style.display = "block";
            isVisibleN = true;
        }
    })

});

