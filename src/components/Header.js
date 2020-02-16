import React from "react";

import companyLogo from "../media/imgs/company-logo.png";

const Header = () => {
    return (
        <header className="header grid">
            <img className="header__company-logo" src={companyLogo} alt="Keller Williams Logo" />
        </header>        
    );
}

export default Header;
