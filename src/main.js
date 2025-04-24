import './style/main.scss';

import homePage from './pages/home.js';
import settingsPage from './pages/settings.js';

import header from './components/header.js';
import footer from './components/footer.js';
//import archivePage from './pages/archive.js';


const app = document.querySelector("#app");

function renderPage() {
    app.innerHTML = "";  // Ryd siden

    // Bestem hvilken side der skal vises, baseret på hash i URL
    const route = window.location.hash;

    // Opret header, afhængigt af om vi er på forsiden
    //const isHome = route === "" || route === "#home";  // Check for forsiden
    app.append(header(window.location.hash));  // Hvis det ikke er forsiden, skal headeren have "Forside"-link

    // Opret main-elementet
    const mainElm = document.createElement("main");

    // Afhængig af route, vis den rette side
    if (route === "#archive") {
        mainElm.append(archivePage());
       // } else if (route === "#popular") {
        //    mainElm.append(popularPage());
        } else if (route === "#settings") {
            mainElm.append(settingsPage());
    } else {
        mainElm.append(homePage());  // Standard er forsiden
    }

    app.append(mainElm);  // Append main til app
    //app.append(footer());  // Append footer
    app.append(footer());
}

// Kør renderPage() når siden loader, eller når URL ændrer sig
window.addEventListener("load", renderPage);
window.addEventListener("hashchange", renderPage);

