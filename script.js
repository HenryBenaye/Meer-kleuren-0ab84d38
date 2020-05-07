function knop() {
    var color = document.getElementById("colorChoice").value;
    document.body.style.backgroundColor = color;
    document.querySelector("body").innerText= "Verander achtergrond kleur!";
}