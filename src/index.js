import createPage from "./createPage";

function component() {
    const content = document.querySelector('#content');
    const element = document.createElement('div');

    element.innerHTML = 'Hello world';
    content.appendChild(element);
    return content;

}

document.body.appendChild(component());