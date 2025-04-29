import categoryMenu from '../components/category.js';
import button from '../components/button-round.js';
import '../components/button-round.scss';


export default function settingsPage() {
    
    const fragment = document.createDocumentFragment();

    const mainElm = document.createElement("main");
    fragment.append(mainElm);


    const navElm = document.createElement("nav");
    mainElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
     ulElm.append(categoryMenu("Europe", window.location.hash));
     ulElm.append(categoryMenu("health", window.location.hash));
     ulElm.append(categoryMenu("sport", window.location.hash));
     ulElm.append(categoryMenu("business", window.location.hash));
     ulElm.append(categoryMenu("travel", window.location.hash));

    const settingsArticle = document.createElement("article");
    settingsArticle.className = "settings-article";
    mainElm.append(settingsArticle);

    settingsArticle.append(button("btnDarkMode", "Toggle dark mode"));

    return fragment;
}