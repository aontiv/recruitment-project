import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.css";

// Image Imports
import companyLogo from "./media/imgs/company-logo.png";

// SVG Imports
import questionsLine from "./media/svgs/section-01-text-questions__line.svg";
import airplane from "./media/svgs/section-01-airplane__airplane.svg";
import fullName from "./media/svgs/section-01-form-input__full-name.svg";
import email from "./media/svgs/section-01-form-input__email.svg";
import phone from "./media/svgs/section-01-form-input__phone.svg";
import radioDefault from "./media/svgs/section-01-form-radio-btns__radio--default.svg";
import radioChecked from "./media/svgs/section-01-form-radio-btns__radio--checked.svg";
import marketing from "./media/svgs/section-03-card__marketing.svg";
import technology from "./media/svgs/section-03-card__technology.svg";
import training from "./media/svgs/section-03-card__training.svg";
import success from "./media/svgs/section-03-card__success.svg";
import checkmark from "./media/svgs/subsection-03-bullets-bullet__checkmark.svg";
import play from "./media/svgs/section-05-text-action__play.svg";

// Video
import video from "./media/vids/kw-promotional-video.mp4";

const App = () => {
    return (
        <div className="main-bg">
            <div className="background--top">
                {/* Header */}
                <header className="header grid">
                    <img className="header__company-logo" src={companyLogo} alt="" />
                </header>

                {/* Section 01 */}
                <div className="section-01 grid">

                    {/* Section 01: Text */}
                    <div className="section-01-text">
                        <div className="section-01-text-questions">
                            <img src={questionsLine} alt="" />
                            <p className="section-01-text-questions__text medium-20-20">Career change? New future?</p>
                        </div>
                        <h1 className="section-01-text__title bold-60-68">Ready for Extraordinary?</h1>
                        <p className="section-01-text__text regular-18-26">Keller Williams has always been more than just a real estate company. Our mission is clear: to build careers worth having, businesses worth owning and lives worth living.</p>
                    </div>

                    {/* Section 01: Airplane */}
                    <div className="section-01-airplane">
                        <img className="section-01-airplane__airplane" src={airplane} alt="" />
                    </div>

                    {/* Section 01: Form */}
                    <form className="section-01-form">
                        <h2 className="section-01-form__title medium-40-48">Start now!</h2>
                        <p className="section-01-form__subtitle regular-20-28">Start your KW journey today:</p>

                        {/* Input: Full Name */}
                        <div className="section-01-form-input">
                            <img src={fullName} alt="" />
                            <input className="section-01-form-input__input regular-16-16" type="text" placeholder="Full Name" />
                        </div>

                        {/* Input: Email */}
                        <div className="section-01-form-input">
                            <img src={email} alt="" />
                            <input className="section-01-form-input__input regular-16-16" type="email" placeholder="Email" />
                        </div>

                        {/* Input: Phone */}
                        <div className="section-01-form-input">
                            <img src={phone} alt="" />
                            <input className="section-01-form-input__input regular-16-16" type="phone" placeholder="Phone" />
                        </div>

                        {/* Radio Button: Agent */}
                        {/* TODO: Switch radio button image when clicked */}
                        <label className="section-01-form-radio-btns regular-16-16">A licensed Agent
                            <input className="section-01-form-radio-btns__input" type="radio" name="radio" />
                            <img className="section-01-form-radio-btns__radio" src={radioDefault} />
                        </label>

                        {/* Radio Button: Real Estate School */}
                        <label className="section-01-form-radio-btns section-01-form-radio-btns--school regular-16-16">In Real Estate School
                            <input className="section-01-form-radio-btns__input" type="radio" name="radio" />
                            <img className="section-01-form-radio-btns__radio" src={radioChecked} />
                        </label>

                        {/* Submit Button */}
                        <button className="section-01-form__submit bold-20-20" type="submit">GET STARTED</button>
                    </form>

                    {/* Section 01: Form Success*/}


                </div>

                {/* Section 02 */}
                <div className="section-02 grid">
                
                    <h2 className="section-02__title bold-40-48">Built by Agent, for Agents</h2>
                    <p className="section-02__text regular-20-28">And that means an unapologetic focus on you – the most important part of our business – the agent.</p>

                </div>

                {/* Section 03 */}
                <div className="section-03 grid">

                    {/* Section 03: Cards */}
                    <div className="section-03-cards">
                
                        {/* Card: Marketing */}
                        <div className="section-03-card">
                            <div className="section-03-card-icon">
                                <img className="section-03-card-icon__marketing" src={marketing} alt="" />
                            </div>
                            <h3 className="section-03-card__title bold-24-28">Marketing</h3>
                            <p className="section-03-card__text light-16-24">The KW Lead Generation Network gives you presence and power in online searches. The Keller Williams Listing System (KWLS) protects you when you decide to syndicate your listings.</p>
                        </div>

                        {/* Card: Technology */}
                        <div className="section-03-card">
                            <div className="section-03-card-icon">
                                <img className="section-03-card-icon__technology" src={technology} alt="" />
                            </div>
                            <h3 className="section-03-card__title bold-24-28">Cutting Edge Technology</h3>
                            <p className="section-03-card__text light-16-24">The Keller Cloud is technology that helps you control your database, your business, and your future with a fully integrated suite of products developed by agents, for agents.</p>
                        </div>

                        {/* Card: Training and Coaching */}
                        <div className="section-03-card">
                            <div className="section-03-card-icon">
                                <img className="section-03-card-icon__training" src={training} alt="" />
                            </div>
                            <h3 className="section-03-card__title bold-24-28">Training and Coaching</h3>
                            <p className="section-03-card__text light-16-24">Named the #1 Training Organization in the world by Training Magazine in 2015, we’re often described as a training and coaching company cleverly disguised as a real estate franchise.</p>
                        </div>

                        {/* Card: Shared Success */}
                        <div className="section-03-card">
                            <div className="section-03-card-icon">
                                <img className="section-03-card-icon__success" src={success} alt="" />
                            </div>
                            <h3 className="section-03-card__title bold-24-28">Shared Success</h3>
                            <p className="section-03-card__text light-16-24">Shared decisions. Shared succes. Through our profit share (US & Canada) and the growth share (Worldwide) programs, Keller Williams recognizes and rewards associates for helping to grow the company.</p>
                        </div>

                    </div>

                </div>

                {/* Sub-Section 03 */}
                <div className="subsection-03 grid">
                
                    <h3 className="subsection-03__title bold-24-28">...and more</h3>
                    <div className="subsection-03-bullets">

                        {/* Bullet 01 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">Command: optimize & mange your business</p>
                        </div>

                        {/* Bullet 02 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">Kelle: Command in your pocket</p>
                        </div>

                        {/* Bullet 03 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">KW App: much more than just search</p>
                        </div>

                        {/* Bullet 04 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">Associate Leadership Council</p>
                        </div>

                        {/* Bullet 05 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">KW Cares: 501(c)(3) charity</p>
                        </div>

                        {/* Bullet 06 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">KW Wellness Program</p>
                        </div>

                        {/* Bullet 07 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">KW RED Day</p>
                        </div>

                        {/* Bullet 08 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">REALTOR Magazine’s ’30 Under 30′</p>
                        </div>

                        {/* Bullet 09 */}
                        <div className="subsection-03-bullets-bullet">
                            <img src={checkmark} alt="" />
                            <p className="subsection-03-bullets-bullet__text regular-16-16">KW Kids Can (KWKC)</p>
                        </div>
                    </div>
                
                </div>

                {/* Section 04 */}
                <div className="section-04 grid">

                    <h2 className="section-04__title bold-40-48">Build the #1 Brand. Yours.</h2>
                    <p className="section-04__text regular-20-28">Your clients choose YOU, not your firm. We stand behind our agents, not in front of them, providing you with the tools you need to power your business.</p>

                </div>

            </div>

            <div className="background--bottom">

                {/* Section 05 */}
                <div className="section-05 grid">
                
                    <video className="section-05__video" controls src={video}></video>
                    <div className="section-05-text">
                        <h4 className="section-05-text__title bold-20-20">Want to learn more?</h4>
                        <p className="section-05-text__text light-16-24">Check out the promotional video to get inspired:</p>
                        <div className="section-05-text-action">
                            <img className="section-05-text-action__play" src={play} alt="" />
                            <p className="section-05-text-action__text bold-20-20">WATCH VIDEO</p>
                        </div>
                    </div>
                    
                </div>

                {/* Section 06 */}
                <div className="section-06 grid">
                
                    <h1 className="section-06__title bold-60-68">Ready to start?</h1>
                    <p className="section-06__text regular-18-26">If you’re looking for a refreshing change, a positive atmosphere and opportunities to turn your career dreams into reality, Keller Williams is the place for you.</p>
                
                </div>

            </div>

            {/* Footer */}
            <div className="footer">

                <div className="footer-content-cta">
                    <h2 className="footer-content-cta__title medium-40-48">Start your new career today!</h2>
                    <button className="footer-content-cta__button bold-20-20">GET STARTED</button>
                </div>
            
                <div className="footer-content">
                    <p className="footer-content__text footer-content__text--license regular-16-16">#NV S.177579</p>
                    <p className="footer-content__text footer-content__text--phone regular-16-16">Phone: 775-846-0349</p>
                    <p className="footer-content__text footer-content__text--email regular-16-16">Email: ginger.marphis@gmail.com</p>
                    <p className="footer-content__text footer-content__text--disclaimer light-16-16">Every Office is Independently Owned & Operated. Keller Williams Realty, Inc. is a real estate franchise company. Each Keller Williams office is independently owned and operated. Keller Williams Realty, Inc. is an Equal Opportunity Employer and supports the Fair Housing Act. All information provided is deemed reliable but is not guaranteed and should be independently verified. Properties subject to prior sale or rental.</p>
                    <p className="footer-content__text footer-content__text--copyright light-16-16">Copyright © 2000-2020 Keller Williams® Realty.</p>
                </div>

            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));