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
// Funktion til at tilføje event listeners på knapperne
function attachCategoryClickListeners() {
    const categories = ["world", "health", "sports", "business", "travel", "technology"];

    categories.forEach(category => {
        const button = document.querySelector(`.fetch-btn-${category}`); // Sørg for at knapperne har en unik klasse for hver kategori
        if (button) {
            button.addEventListener("click", () => handleCategoryClick(category));
        }
    });
}

// Håndterer fetching af artikler, når en kategori-knap trykkes
async function handleCategoryClick(category) {
    const days = 7; // Hent artikler for de sidste 7 dage
    const articles = await fetchPopularData(category, days); // Fetch data for den valgte kategori

    // Vis de hentede artikler på din side
    console.log(`Fetched ${category} articles`, articles);
    // Du kan her opdatere DOM'en med de hentede artikler
    renderArticles(articles);
}

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