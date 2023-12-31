import home from "./home";
import menu from "./menu";

const content = document.querySelector("#content");

const topNav = document.createElement("div");
const homeBtn = document.createElement("p");
const menuBtn = document.createElement("p");
const contactBtn = document.createElement("p");

topNav.classList.add("top__nav");

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

topNav.append(homeBtn, menuBtn, contactBtn);

document.body.appendChild(topNav);

const navLinks = document.querySelectorAll("p");
console.log(navLinks);


navLinks.forEach((p) => {
    p.addEventListener("click", renderPage);
});

function renderPage(e) {
    content.innerHTML = '';
    console.log(e.target.textContent);
    let route = e.target.textContent.toLowerCase();
    if (route === "home") {
        content.appendChild(home());
    }   else if (route === "menu") {
        content.appendChild(menu());
    }

    console.log(route);
    // const page = document.createElement(route());
    
}