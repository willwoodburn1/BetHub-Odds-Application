import React from "react";
import "./style.css";


function Footer() {
    return (
        <>
            <nav id="footerNav">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )

}
export default Footer;