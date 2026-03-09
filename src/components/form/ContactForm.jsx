import React from 'react'

export default function ContactForm() {
    return (
        <div className="contact__center" >
            <div className="contact__header">
                <h2 className="contact__title">
                    Our experts will take care of your friend
                </h2>
                <p className="contact__subtitle">
                    Fill out the form so we can contact you!
                </p>
            </div>

            <form className="contact__form">
                <label className="contact__field">
                    <span className="contact__placeholder">
                        <svg className="contact__icon">
                            <use href="/images/sprite.svg#people" />
                        </svg>
                        Your name
                    </span>

                    <input
                        type="text"
                        className="contact__input"
                    />
                </label>

                <label className="contact__field">
                    <span className="contact__placeholder">
                        <svg className="contact__icon">
                            <use href="/images/sprite.svg#dog" />
                        </svg>
                        Pet name
                    </span>

                    <input
                        type="text"
                        className="contact__input"
                    />
                </label>


                <label className="contact__field">
                    <span className="contact__placeholder">
                        <svg className="contact__icon">
                            <use href="/images/sprite.svg#phone" />
                        </svg>
                        Your phone
                    </span>

                    <input
                        type="text"
                        className="contact__input"
                    />
                </label>


                <label className="contact__field">
                    <span className="contact__placeholder">
                        <svg className="contact__icon">
                            <use href="/images/sprite.svg#email" />
                        </svg>
                        Your email
                    </span>

                    <input
                        type="text"
                        className="contact__input"
                    />
                </label>


                <button type="submit" className="contact__button btn">
                    Contact us
                </button>

                <label className="contact__agree">
                    <input type="checkbox" />
                    <span>I agree to the privacy policy</span>
                </label>
            </form>
        </div>
    )
}
