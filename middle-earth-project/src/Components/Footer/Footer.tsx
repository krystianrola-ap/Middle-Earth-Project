import React from "react";
import { footerContainer, imageContainer, image } from "./styling";

export const Footer = () => {
    return (
        <div className={footerContainer}>
            <div className={imageContainer}>
                <img src="/images/react-logo.png" alt="react-logo" className={image}/>
            </div>
            <div className={imageContainer}>
                <img src="/images/tailwind-css.png" alt="tailwind-logo" className={image}/>
            </div>
            <div className={imageContainer}>
                <img src="/images/lotr-logo.png" alt="lort-logo" className={image}/>
            </div>
            <div className={imageContainer}>
                <img src="/images/hobbit-logo.png" alt="hobbit-logo" className={image}/>
            </div>
        </div>
    )
}