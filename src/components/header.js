import logo from '../imgs/newsify_logo.svg';
import './header.scss';

export default function header() {
    let headerElm = document.createElement("header")
    headerElm.className="header"

    headerElm.innerHTML = `
        <img src="${logo}" alt="newsify logo">
        <h1>Newsify</h1>
    `
    return headerElm
}