const btn=document.querySelector(".menu");
const nav=document.querySelector(".navbar ul");


btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
