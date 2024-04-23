class ContactForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                                          <section class="contact-elements">
                                            <form action="/send_email" method="post">
                                                <div class="contact-input-box">
                                                    <div class="contact-input-field">
                                                        <label>
                                                            <input type="text" name="fullName" id="fullName" placeholder="Imię i Nazwisko" required >
                                                        </label>
                                                    </div>
                                                    <div class="contact-input-field">
                                                        <label>
                                                            <input type="text" name="email" id="email" placeholder="Adres email" required >
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="contact-input-box">
                                                    <div class="contact-input-field">
                                                        <label>
                                                            <input type="number" name="numberPhone" id="numberPhone" placeholder="Numer telefonu" required>
                                                        </label>
                                                    </div>
                                                    <div class="contact-input-field">
                                                        <label>
                                                            <input type="text" name="subject" id="subject" placeholder="Temat" required>
                                                        </label>
                                                    </div>
                                                </div>
<!--                                                <div class="contact-input-box">-->
                                                    <div class="contact-textarea-field">
                                                        <label>
                                                            <textarea name="message" id="message" placeholder="Twoja wiadomość" required></textarea>
<!--                                                             cols="30" rows="7" -->
                                                        </label> 
                                                    </div>
<!--                                                </div>-->
                                                <div class="contact-button">
                                                    <span class="contact-button-content">
                                                        <button type="submit" class="contact-button-text">WYŚLIJ</button>
                                                    </span>
                                                </div>
                                               
                                            </form>
                                        </section>
    `;
    }
}

customElements.define('contact-form', ContactForm);