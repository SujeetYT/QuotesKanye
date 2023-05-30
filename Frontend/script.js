const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const box = document.querySelector(".box");
const close  = document.querySelector(".close");
const loading = document.querySelector(".loading");

btn.addEventListener("click", async ()=>{
    try {
        box.style.display = "block";
        loading.style.display = "block";
        const apiLink = "https://quoteskanye.onrender.com/";
        let response = await fetch(apiLink);
        let result = await response.json();
        loading.style.display = "none";
        quote.textContent = result.quote;
        
    } catch (error) {
        console.log(error);
        quote.textContent = "Bad Request";
    }
})

close.addEventListener("click", ()=>{
    box.style.display = "none";
    quote.textContent = "";
})
