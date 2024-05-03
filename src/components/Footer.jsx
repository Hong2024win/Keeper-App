import React from "react";

export default function Footer(){
    let currentYear = new Date().getFullYear();
    return(
        <footer>
        <p>copyright {currentYear}</p>
        </footer>
    )
}