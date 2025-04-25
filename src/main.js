import './style/main.scss';

import homePage from './pages/home.js';
import settingsPage from './pages/settings.js';
import popularPage from './pages/popular.js';
import archivePage from './pages/archive.js';


import header from './components/header.js';
import footer from './components/footer.js';
import { fetchPopularData } from './utilities/fetch-popular.js';



const app = document.querySelector("#app");

function renderPage() {
    app.innerHTML = "";  // Ryd siden

    // Bestem hvilken side der skal vises, baseret på hash i URL
    const route = window.location.hash;

    app.append(header(window.location.hash)); 

    const mainElm = document.createElement("main");

    // Afhængig af route, vis den rette side
    if (route === "#archive") {
        mainElm.append(archivePage());
       } else if (route === "#popular") {
           mainElm.append(popularPage());
        } else if (route === "#settings") {
            mainElm.append(settingsPage());
    } else {
        mainElm.append(homePage());  // Standard er forsiden
    }

    app.append(mainElm);  
    app.append(footer());
}

window.addEventListener("load", async () => {
    await fetchPopularData('viewed', 7); // Hent ALLE artikler fra alle kategorier ved load
    console.log()
    renderPage();
});

// Kør renderPage() når siden loader, eller når URL ændrer sig
//window.addEventListener("load", renderPage);
window.addEventListener("hashchange", renderPage);

