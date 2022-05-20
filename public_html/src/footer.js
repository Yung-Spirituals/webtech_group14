const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  
        <link rel="stylesheet" type="text/css" href="src/footer.css"/>
        <footer>
            <div class="useful-information" id="extras-list">
                <ul>
                    <li>DISCOVER</li>
                    <li><a href="#">FIND A STORE</a></li>
                    <li><a href="#">SIGN UP FOR EMAILS</a></li>
                    <li><a href="#">FEEDBACK</a></li>
                </ul>
            </div>
            <div class="useful-information" id="get-help-list">
                <ul>
                    <li>GET HELP</li>
                    <li><a href="#">ORDER STATUS</a></li>
                    <li><a href="#">SHIPPING AND DELIVERY</a></li>
                    <li><a href="#">RETURNS</a></li>
                    <li><a href="#">PAYMENT OPTIONS</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div class="useful-information" id="about-us-list">
                <ul>
                    <li>ABOUT US</li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Sustainability</a></li>
                </ul>
            </div>
            <div class="useful-information" id="socials-list">
                <ul>
                    <li>SOCIALS</li>
                    <li>FIND US ON:</li>
                    <li>
                        <img src="src/icons/facebook.png" alt="facebook">
                    </li>
                    <li>
                        <img src="src/icons/instagram.png" alt="instagram">
                    </li>
                    <li>
                        <img src="src/icons/twitter.png" alt="twitter">
                    </li>
                </ul>
            </div>
        </footer>
        `;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);