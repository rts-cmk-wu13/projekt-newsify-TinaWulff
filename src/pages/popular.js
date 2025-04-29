
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
     ulElm.append(categoryMenu("arts", "#popular"));
     ulElm.append(categoryMenu("health", "#popular"));
     ulElm.append(categoryMenu("sports", "#popular"));
     ulElm.append(categoryMenu("technology", "#popular"));
     ulElm.append(categoryMenu("travel", "#popular"));

    return fragment;
}
