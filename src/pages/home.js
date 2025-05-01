
import categoryMenu from '../components/category.js';


export default function homePage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
     ulElm.append(categoryMenu("arts", "#home"));
     ulElm.append(categoryMenu("health", "#home"));
     ulElm.append(categoryMenu("sport", "#home"));
     ulElm.append(categoryMenu("technology", "#home"));
     ulElm.append(categoryMenu("travel", "#home"));

    return fragment;
}
