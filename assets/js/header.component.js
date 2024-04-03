class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                   <!--               header-open-->
            <header class="header">
                <div class="site-header">
                <!--                    #header-desktop-open-->
                        <div class="header-content">
                            <a href="/" class="logo">  <!-- "http://h-tx.pl/"-->
                               <img src="../images/LOGO_b.png" alt="Heating Technix">
        <!--                        HEATING TECHNIX-->
                            </a>
<!--                        </div>-->
<!--                        <div class="menu-elements">-->
<!--                            <div class="bx bx-menu" id="menu-icon"><span class="animate" style="&#45;&#45;i:2;"></div>-->
<!--                            <div class="element-widget-container">-->
                                <nav id="site-navigation" class="main-navigation">
                                    <ul id="primary-menu" class="menu">
                                        <li id="menu-item-portfolio" class="nav-item"><a href="/portfolio">Portfolio</a></li>
                                        <li id="menu-item-offer" class="nav-item"><a href="/offer">Oferta</a></li>
                                        <li id="menu-item-about" class="nav-item"><a href="/about">O nas</a></li>
                                        <li id="menu-item-contact" class="nav-item"><a href="/contact">Kontakt</a></li>
                                    </ul>
                                </nav>
<!--                            </div>-->
                            
                            <div class="hamburger">
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>                 
                        </div>
                </div>
            </header>
    `;
    }
}

customElements.define('main-header', Header);