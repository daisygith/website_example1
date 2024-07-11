class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--                FOOTER-->
                <footer class="site-footer">
                    <div class="footer-class">
                        <section class="footer-element">
                            <div class="element-footer-container">
                                    <div class="footer-column">
                                        <div class="footer-widget-wrap">
                                            <div class="footer-title">
                                               <a href="/" class="logo"> 
                        LOGO.
                                                </a>
                                            </div>
                                            <div class="footer-paragraph">
                                                    <p>
                                                        <b>XXX</b>
                                                        <br> ul.xxx
                                                        <br>kod - Miejscowość
                                                        <br>
                                                        <a href="tel:123123123">123 123 123</a>
                                                         |
                                                        <a href="mailto:email@email.com">email@email.com</a>
                                                        <br>
                                                        NIP: 123-123-12-12
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="element-footer-container">
                                    <div class="footer-column">
                                        <div class="footer-widget-wrap">
                                            <div class="footer-title">
                                                    <h4>Mapa strony</h4>
                                            </div>
                                            <div class="footer-paragraph">
                                                    <p>
                                                        <a href="/portfolio">Portfolio</a>
                                                    </p>
                                                    <p>
                                                        <a href="/offer">Oferta</a>
                                                    </p>
                                                    <p>
                                                        <a href="/about">O nas</a>
                                                    </p>
                                                    <p>
                                                        <a href="/contact">Kontakt</a>
                                                    </p>
                                                    <p>
                                                        <a href="/privacy_policy">Polityka prywatoności</a>
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </div>
                    <div class="footer-class">
                        <div class="footer-laws">
                            <div class="footer-text">
                                <p>© XXX 2024. Wszelkie prawa zastrzeżone.</p>
                            </div>
                            <div class="footer-text">
                                <a href="/">
                                    <p>| Projekt i realizacja SDU</p>
                                </a>
                            </div>
                        </div>
                        <div class="footer-iconTop">
                            <a href="#">
                                <i class="bx bx-up-arrow-alt"></i>
                            </a>
                        </div>
                    </div>
                </footer>
    `;
    }
}

customElements.define('main-footer', Footer);