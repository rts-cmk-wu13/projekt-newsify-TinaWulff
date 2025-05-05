
import './category.scss';
import logo from '../imgs/newsify_logo.svg';
import { fetchPopularData } from '../utilities/fetch-popular.js';
import { fetchlatestNews } from '../utilities/fetch-home.js';
//import '../utilities/swipe.js';

export default function categoryMenu(menuCategory, route) {
    const categoryElm = document.createElement("li");
    categoryElm.className = "category";

    let trailingElement;

    if (route === "#settings") {
        trailingElement = `<label class="switch">
                               <input type="checkbox">
                               <span class="slider round"></span>
                            </label>`;
    } else {
        trailingElement = `<button class="fetch-btn"><i class="fa-solid fa-chevron-right"></i></button>`;
    }

    categoryElm.innerHTML = `
        <img class="logo" src="${logo}" alt="newsify logo">
        <h4>${menuCategory}</h4> 
        ${trailingElement}
        <div class="articles-container"></div> <!-- container til denne kategori til at hente artikler ind i -->
    `;

    const button = categoryElm.querySelector('.fetch-btn');
    const articlesContainer = categoryElm.querySelector('.articles-container');

    if (button) {
        button.addEventListener("click", async () => {
            button.classList.toggle("clicked");  // Når knappen klikkes, toggle klassen 'clicked'
            //tager kategorien og gør lowercase for så vi kan matche det med API'ets eller cache'ns keys,
            // og dermed hente ud fra disse kategorier.
            const key = menuCategory.toLowerCase();
            
            
            // Hvis der allerede er hentet artikler, toggle visning
            if (articlesContainer.innerHTML.trim() !== "") {
                articlesContainer.classList.toggle('hidden');
                return;
            }

            // Fetch artikler
            let articles;
            if (route === "#popular") {
                articles = await fetchPopularData(key);
            } else if (route === "" || route === "#home" || route === "#") {
                articles = await fetchlatestNews(key); 
            } else {
                console.warn("Ukendt route, ingen fetch udført");
                return;
            }
            

            console.log("Fetched articles for", key, articles);

           
            
            // Render artikler
            articles.forEach(article => {
                const articleElm = document.createElement("article");
                articleElm.className = "article";
                const imageUrl = article.multimedia?.[0]?.url; 
                articleElm.innerHTML = `
                <a href="${article.url}" target="_blank">
                    <img class="article-img" src="${imageUrl}" alt="article image">
                    <h3>${article.title}</h3>
                    <p>${article.abstract}...</p>
                </a>
                `;
                articlesContainer.append(articleElm);
            });
        });
    }

    return categoryElm;
}


