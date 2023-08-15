import createPage from "./createPage";
const contentDiv = document.querySelector('#content');

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello world';    
    
    return element;
}
let createdPage = createPage();
contentDiv.appendChild(createdPage);

let navLinks = document.querySelector('.nav-links');
console.log(navLinks);