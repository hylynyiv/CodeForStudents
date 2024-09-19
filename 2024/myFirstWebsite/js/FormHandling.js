document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const div = document.createElement("div");
        div.innerText = "Thank you " + username + "! We will forward your message, not." ;
        document.getElementById("response").appendChild(div);

        const btn = document.createElement("button");
        btn.innerText = "Okay";
        btn.addEventListener("click", () => {
            for (let i=0; i<20; i++){
                const hahDiv = document.createElement("marquee");
                hahDiv.direction = "down";
                hahDiv.innerText = "haHa";
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;

                Object.assign(hahDiv.style, {
                    position: "absolute",
                    color: "red",
                    fontSize: "40px",
                    // top: 3*i + "5px", 
                    top: randomY + "px",
                    left: randomX + "px",
                } )
                document.getElementById("contactForm").appendChild(hahDiv);
                setTimeout(() => {hahDiv.remove()}, 2000);

            }
            
        })
        document.getElementById("response").appendChild(btn);



        if(document.getElementById("isCat").checked){
            document.getElementById("response").innerText = "Mew Mew Mew";
        }
    })


})