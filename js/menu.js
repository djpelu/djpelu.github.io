class SiteMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <label class="hamburger">
                <input type="checkbox">
            </label>

            <aside class="sidebar">
                <nav>
                    <a href="./bio">su di me</a>  
                    <a href="./lit" id="nav_scritti">SCRITTI</a>
                    <a id="btn_milan_side" href="./milan">AC Milan ! Book Club</a>
                </nav>
                <div id="crawling_mobile_div">
                    <img src="images/crawling_snake_mobile.png" alt="">
                    <a href="./crawling"><button class="btn_verde btn_rettangolo">crawling</button></a>
                    <img id="fauci" src="images/crawling_fauci_mobile.png" alt="">
                </div>
                <nav>
                    <a href="./TRE">dov'è il cavallo?</a> 
                    <a href="./">home</a>     
                </nav>
            </aside>
        `;
    }
}

// Definisce il nuovo tag HTML personalizzato
customElements.define('site-menu', SiteMenu);