
import './category.scss';
import logo from '../imgs/newsify_logo.svg';


export default function categoryMenu(menuItem) {
    let categoryElm = document.createElement("li");
    categoryElm.className="category"

    categoryElm.innerHTML = `
    <button>
        <img class="logo" src="${logo}" alt="newsify logo">
       <span>${menuItem}</span> 

       <i class="fa-solid fa-chevron-right"></i>
    </button>
    `
    return categoryElm;
}