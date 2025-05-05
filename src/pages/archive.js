
import categoryMenu from '../components/category.js';
import { initSwipe } from '../utilities/swipe.js';


export default function archivePage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
     ulElm.append(categoryMenu("arts", "#archive"));
     ulElm.append(categoryMenu("health", "#archive"));
     ulElm.append(categoryMenu("sports", "#archive"));
     ulElm.append(categoryMenu("technology", "#archive"));
     ulElm.append(categoryMenu("travel", "#archive"));

     initSwipe(ulElm);

  return fragment;
}