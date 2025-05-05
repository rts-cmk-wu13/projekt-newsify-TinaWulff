
import categoryMenu from '../components/category.js';
import { initSwipe } from '../utilities/swipe.js';


export default function popularPage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
     ulElm.append(categoryMenu("arts", "#popular"));
     ulElm.append(categoryMenu("health", "#popular"));
     ulElm.append(categoryMenu("sports", "#popular"));
     ulElm.append(categoryMenu("technology", "#popular"));
     ulElm.append(categoryMenu("travel", "#popular"));

     //Kald swipefunktion på ulElm'erne:
     initSwipe(ulElm);

    return fragment;
}
