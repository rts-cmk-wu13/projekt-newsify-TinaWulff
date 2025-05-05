
import categoryMenu from '../components/category.js';


export default function archivePage() {
    
    const fragment = document.createDocumentFragment();

    const sectionElm = document.createElement("section");
    fragment.append(sectionElm);


    const navElm = document.createElement("nav");
    sectionElm.append(navElm);

    const ulElm = document.createElement("ul");
    navElm.append(ulElm);
     // Append alle dine komponenter
     ulElm.append(categoryMenu("arts"));
     ulElm.append(categoryMenu("health"));
     ulElm.append(categoryMenu("sports"));
     ulElm.append(categoryMenu("technology"));
     ulElm.append(categoryMenu("travel"));

    return fragment;
}