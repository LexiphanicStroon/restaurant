const content = document.querySelector("#content");

const main = document.querySelector("#content");
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

function renderPage(content) {
    
}

navLinks.forEach((p) => {
    p.addEventListener("click", () => {console.log('click worked');});
});
