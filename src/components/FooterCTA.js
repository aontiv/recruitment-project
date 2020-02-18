import React from "react";

const FooterCTA = () => {
    // Scroll to the top of the screen so a user can fill out the form
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer-content-cta">
            <h2 className="footer-content-cta__title medium-40-48">Start your new career today!</h2>
            <button className="footer-content-cta__button bold-20-20" onClick={scrollToTop}>GET STARTED</button>
        </div>
    );
}

export default FooterCTA;
