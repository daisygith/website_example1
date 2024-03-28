class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                   <!--               header-open-->
            <header class="header">
                <div class="site-header">
                <!--                    #header-desktop-open-->
                        <div class="element-widget-container">
                            <a href="/" class="logo">  <!-- "http://h-tx.pl/"-->
                               <img src="../images/LOGO_b.png" alt="Heating Technix">
        <!--                        HEATING TECHNIX-->
                            </a>
                        </div>
                        <div class="element-widget-container">
                            <nav id="site-navigation" class="main-navigation">
                                <ul id="primary-menu" class="menu">
                                    <li id="menu-item-portfolio" class="menu-item menu-item-portfolio"><a href="/portfolio">Portfolio</a></li>
                                    <li id="menu-item-offer" class="menu-item menu-item-offer"><a href="/offer">Oferta</a></li>
                                    <li id="menu-item-about" class="menu-item menu-item-about"><a href="/about">O nas</a></li>
                                    <li id="menu-item-contact" class="menu-item menu-item-contact"><a href="/contact">Kontakt</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </header>
    `;
    }
}

customElements.define('main-header', Header);