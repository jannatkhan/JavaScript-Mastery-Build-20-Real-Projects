const j = document.getElementById("j")
const a = document.getElementById("a")
const n = document.getElementById("n")
const n2 = document.getElementById("n2")
const a2 = document.getElementById("a2")
const t = document.getElementById("t")
const Jannat = document.getElementById("complete")

j.addEventListener("click",()=>{
    j.style.display = "none";
    a.style.display = "block";
});

a.addEventListener("click",()=>{
    a.style.display = "none";
    n.style.display = "block";
});

n.addEventListener("click",()=>{
    n.style.display = "none";
    n2.style.display = "block";
});
n2.addEventListener("click",()=>{
    n2.style.display = "none";
    a2.style.display = "block";
});

a2.addEventListener("click",()=>{
    a2.style.display = "none";
    t.style.display = "block";
});

t.addEventListener("click",()=>{
    t.style.display = "none";
    Jannat.style.display = "block";
});

Jannat.addEventListener("click",()=>{
    Jannat.style.display = "none";
    j.style.display = "block";
});


