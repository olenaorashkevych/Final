import React from 'react'
export default function Icons() {
    return (
        <div className="socials">
            <svg className="social icon-instagram">
                <use href="/images/sprite.svg#instagram" />
            </svg>

            <svg className="social icon-facebook">
                <use href="/images/sprite.svg#ph_facebook-logo" />
            </svg>
        </div>
    )
}
