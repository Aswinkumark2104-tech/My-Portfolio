const topBtn = document.getElementById("topBtn");

topBtn.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};


const theme = document.getElementById("theme");

theme.onclick = () => {
    document.body.classList.toggle("light");
};


const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight-100){
section.classList.add("show");
}

});

});
