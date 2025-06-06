import './style/main.scss';

import splash from './pages/splash.js';

import homePage from './pages/home.js';
import settingsPage from './pages/settings.js';
import popularPage from './pages/popular.js';
import archivePage from './pages/archive.js';

import login from './pages/login.js';
import onboarding from './pages/onboarding.js';

//import './utilities/swipe.js';

import header from './components/header.js';
import footer, { highlightActiveFooterIcon } from './components/footer.js';
import { fetchPopularData } from './utilities/fetch-popular.js';
import { fetchlatestNews } from './utilities/fetch-home.js';





const app = document.querySelector("#app");

function renderPage() {
    app.innerHTML = "";  // Ryd siden

    // Bestem hvilken side der skal vises, baseret på hash i URL
    const route = window.location.hash;

    const mainElm = document.createElement("main");
    
    // Afhængig af route, vis den rette side
    if (route === "#archive") {
        app.append(header(window.location.hash)); 
        mainElm.innerHTML = "";
        mainElm.append(archivePage());
        app.append(mainElm); 
        app.append(footer());
    
    } else if (route === "#popular") {
        app.append(header(window.location.hash)); 
        mainElm.innerHTML = "";
        mainElm.append(popularPage());
        app.append(mainElm); 
        app.append(footer());
    
    } else if (route === "#settings") {
        app.append(header(window.location.hash)); 
        mainElm.innerHTML = "";
        mainElm.append(settingsPage());
        app.append(mainElm); 
        app.append(footer());
    
    } else if (route === "#login") {
        mainElm.innerHTML = "";
        mainElm.append(login());
        app.append(mainElm); 
    
    } else if (route === "#home") {
        app.append(header(window.location.hash)); 
        mainElm.innerHTML = "";
        mainElm.append(homePage());
        app.append(mainElm); 
        app.append(footer());
    
    } else if (!route || route === "#") {
        mainElm.innerHTML = "";
        mainElm.append(splash());
        app.append(mainElm); 
    
    } else {
    mainElm.innerHTML = "";
    mainElm.append(onboarding());
    app.append(mainElm); 
    //attachOnboardingEvents();
    //setTimeout(attachOnboardingEvents, 0);
}


highlightActiveFooterIcon();

}



/* Tidligere skipbtn kode
// klik på skipknap og gå frem til login
// function attachOnboardingEvents() {
//     const skipBtn = document.querySelector('.btnSkip');
//     if (skipBtn) {
//         skipBtn.addEventListener('click', () => {
//             location.hash = 'login';
//         });
//     }
    // med setTimeout beder du browseren om at vente ét "tick" i event loopet,
    // så al synkron DOM-manipulation (som append(onboarding())) når at fuldføre,
    // før du prøver at finde elementet.
//}
*/



/* uaktivere funktioner (?)
// Funktion til at tilføje event listeners på knapperne
function attachCategoryClickListeners() {
    //const categories = ["world", "health", "sports", "business", "travel", "technology"];

    categories.forEach(category => {
        // Sørg for at knapperne har en unik klasse for hver kategori
        const button = document.querySelector(`.fetch-btn-${category}`);
        
        if (button) {
            button.addEventListener("click", () => -handleCategoryClick(category));
        }
    });
}

// Håndterer fetching af artikler, når en kategori-knap trykkes
async function handleCategoryClick(category) {

    const days = 7; // Hent artikler for de sidste 7 dage
    const popArticles = await fetchPopularData(category, days); // Fetch data for den valgte kategori


    // Vis de hentede artikler på din side
    console.log(`Fetched ${category} articles`, popArticles);
    // Du kan her opdatere DOM'en med de hentede artikler
    renderArticles(popArticles);
}
*/




// Kald renderPage() ved load og hashchange
window.addEventListener("load", renderPage);
window.addEventListener("hashchange", renderPage);

// Funktion til at vise artikler (kan være din eksisterende funktion til at vise artikler på siden)
function renderArticles(articles) {
    const articlesContainer = document.querySelector('.articles-container');
    if (articlesContainer) {
        articlesContainer.innerHTML = articles.map(article => `<div>${article.title}</div>`).join('');
    }
}