export default function homePage() {
    let homeMarkup = `<h1 class="logo">Home Page</h1>`    
    const homeDiv = document.createElement('div');
    homeDiv.insertAdjacentHTML("afterbegin", homeMarkup);
    return homeDiv;
}