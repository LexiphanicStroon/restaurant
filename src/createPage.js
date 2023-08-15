export default function createPage() {
  let navMarkup = `<div class="top-nav">
    <h1 class="logo">Logo</h1>
    <ul class"nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</div>`;

    let navDiv = document.createElement('div');
    navDiv.insertAdjacentHTML("afterbegin", navMarkup);
    return navDiv;

}
