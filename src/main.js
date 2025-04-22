import './style/main.scss';

import homePage from './pages/home.js';
import header from './components/header.js';



const app = document.querySelector("#app");

function renderPage() {
    app.innerHTML = "";  // Ryd siden

    // Bestem hvilken side der skal vises, baseret på hash i URL
    const route = window.location.hash;

    // Opret header, afhængigt af om vi er på forsiden
    const isHome = route === "" || route === "#home";  // Check for forsiden
    app.append(header(!isHome));  // Hvis det ikke er forsiden, skal headeren have "Forside"-link

    // Opret main-elementet
    const mainElm = document.createElement("main");

    // Afhængig af route, vis den rette side
    if (route === "#about") {
        mainElm.append(aboutPage());
    } else {
        mainElm.append(homePage());  // Standard er forsiden
    }

    app.append(mainElm);  // Append main til app
    //app.append(footer());  // Append footer
}

// Kør renderPage() når siden loader, eller når URL ændrer sig
window.addEventListener("load", renderPage);
window.addEventListener("hashchange", renderPage);

