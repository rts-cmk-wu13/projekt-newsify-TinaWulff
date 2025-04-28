
import categoryMenu from '../components/category.js';


export default function popularPage() {
    
    const fragment = document.createDocumentFragment();

    const mainElm = document.createElement("main");
    fragment.append(mainElm);


    const navElm = document.createElement("nav");
    mainElm.append(navElm);

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
