const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" type="text/css" href="src/header.css"/>
        <div id="topbar">
            <p>Fite me</p>
        </div>
        <header>
            <div class="header-container">
                <img src="src/images/leeezard.png" alt="logo" id="logo">
                    <span>XXL</span>
            </div>
            <nav>
                <ul>
                    <li><a href="hello.html">Men</a></li>
                    <li><a href="hello.html">Women</a></li>
                    <li><a href="hello.html">Dogs</a></li>
                    <li><a href="hello.html">Unisex</a></li>
                    <li><a href="hello.html">Utilities</a></li>
                </ul>
            </nav>
            <div class="logoNavigation">
                <span class="material-icons md">
                    search
                </span>
                <span class="material-icons md">
                    shopping_cart
                </span>
                <span class="material-icons md">
                    person_outline
                </span>
                <span class="material-icons md">
                    favorite_border
                </span>
            </div>
        </header>
    `;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);