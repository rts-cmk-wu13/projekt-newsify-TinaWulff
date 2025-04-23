
import './category.scss';
import logo from '../imgs/newsify_logo.svg';


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
      trailingElement = `<button><i class="fa-solid fa-chevron-right"></i></button>`;
    }

    categoryElm.innerHTML = `
    
        <img class="logo" src="${logo}" alt="newsify logo">
       <span>${menuItem}</span> 

    
       ${trailingElement}
    `
    return categoryElm;
}


// til appendet:
//mainElm.append(categoryMenu("min menuItem text", window.location.hash));