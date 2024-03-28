class ContactFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--                    contact-->
                    <section class="elements-contact">
                        <div class="element-widget-container">
                            <div class="elements-contact-column">
                                <div class="elements-contact-wrap">
                                    <div class="elements-contact-box">
                                        <div class="contact-footer-container">
                                            <div class="contact-footer-heading">
                                                <h2 class="contact-footer-text">Jakiekolwiek pytania ?</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elements-contact-box">
                                        <div class="contact-footer-container">
                                            <p>Jeśli masz jakieś pytania - pytaj śmiało.
                                                <br>
                                                Postaram się pomóc.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="elements-contact-box">
                                        <div class="contact-footer-container">
                                            <div class="element-button-wrapper">
                                                <a class="element-button" href="/contact">
                                                    <span class="element-button-content">
                                                        <span class="element-button-text">Kontakt</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    `;
    }
}

customElements.define('contact-footer', ContactFooter);