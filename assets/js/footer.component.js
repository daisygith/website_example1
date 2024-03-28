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
                                               <a href="/" class="logo">  <!-- "http://h-tx.pl/"-->
                                                    <img src="../images/Htx_LOGO.png" alt="Heating Technix">
<!--                        HEATING TECHNIX-->
                                                </a>
                                            </div>
                                            <div class="footer-paragraph">
                                                    <p>
                                                        <b>Heating Technix</b>
                                                        <br> ul.sajdhskjudfbds
                                                        <br>kod - MIejscowość
                                                        <br>
                                                        <a href="tel:123123123">123 123 123</a>
                                                        " | "
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
                                <p>Copyright © 2024 by Sylwia Dudek</p>
                            </div>
                            <div class="footer-media">
                                <a href="https://www.linkedin.com/in/sylwia-dudek-34abab186/">
                                    <i class="bx bxl-linkedin"></i>
                                </a>
                            </div>
                            <div class="footer-text">
                                <p>| All Rights Reserved</p>
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