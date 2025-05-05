
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


     // if local storage har deaktiveret kategori - 

     ulElm.append(categoryMenu("arts", "#popular"));
 // if local storage har deaktiveret kategori - 
     ulElm.append(categoryMenu("health", "#popular"));
 // if local storage har deaktiveret kategori - 
     ulElm.append(categoryMenu("sports", "#popular"));
 // if local storage har deaktiveret kategori - 
     ulElm.append(categoryMenu("technology", "#popular"));
 // if local storage/switch er aktiveret {
     ulElm.append(categoryMenu("travel", "#popular"));


     //Kald swipefunktion på ulElm'erne:
     initSwipe(ulElm);

    return fragment;
}
