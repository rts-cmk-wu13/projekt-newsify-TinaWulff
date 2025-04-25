
import './category.scss';
import logo from '../imgs/newsify_logo.svg';
import renderArticles from '../utilities/fetch-popular.js';

export default function categoryMenu(menuItem, route) {
    let categoryElm = document.createElement("li");
    categoryElm.className="category"

    let trailingElement;

    if (route === "#settings") {
      trailingElement = `<label class="switch">
                           <input type="checkbox">
                           <span class="slider round"></span>
                         </label>`;
    } else {
      trailingElement = `<button class="show-btn"><i class="fa-solid fa-chevron-right"></i></button>`;
    }

    categoryElm.innerHTML = `
    
        <img class="logo" src="${logo}" alt="newsify logo">
       <span>${menuItem}</span> 
       ${trailingElement}
       `
    ;

    //klik på knap for at vise artiklerne (vise dataen gemt i cache)
    const button = categoryElm.querySelector('.toggle-btn');
    if (button) {
        button.addEventListener("click", () => {
            const key = menuItem.toLowerCase();
            const articles = articleCache[key];
            if (articles) {
                renderArticles(articles);
            } else {
                console.warn("Data ikke fundet i cache for:", key);
            }
        });
    }


    return categoryElm;
}

