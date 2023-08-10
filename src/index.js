import createPage from "./createPage";
const content = document.querySelector('#content')

function component() {    
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me';
    btn.onclick = createPage;
    content.appendChild(button);
}

document.body.appendChild(component())
