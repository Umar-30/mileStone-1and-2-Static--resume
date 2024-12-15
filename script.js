var toggleBtn = document.getElementById("toggle-skills");
var skills = document.getElementById("skill");
toggleBtn.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
