const toggleBtn = document.getElementById("toggle-skills") as HTMLButtonElement
const skills = document.getElementById("skill") as HTMLElement

toggleBtn.addEventListener("click", ()=>{
    if(skills.style.display === "none"){
        skills.style.display = "block"
    }else{
        skills.style.display = "none"
    }
});

