import { post } from "./api.js";
const prompt = document.getElementById("prompt");

prompt.addEventListener("input", function(){
    prompt.style.height = "auto";
    const calculatedHeight = prompt.scrollHeight - 20;
    prompt.style.height = calculatedHeight + "px";
});

prompt.addEventListener("keydown",async function(event){
    if(event.key === "Enter" && !event.shiftKey){
        event.preventDefault();

        if(prompt.value.trim() === "") {return;}

        const message = document.createElement("article");
        message.classList.add("message","user");
        const messages = document.querySelector(".messages");
        const paragraph = document.createElement("p");
        paragraph.textContent = prompt.value.trim();
        
        message.appendChild(paragraph);
        messages.appendChild(message);
        prompt.value = ""
        message.scrollIntoView({ behavior: "smooth", block: "end"})
        
        await post(paragraph.textContent)
    } else if(event.key === "Enter" && event.shiftKey) {
        //insertar nueva linea
    }
});