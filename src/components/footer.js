
import './footer.scss';

export default function footer() {
    let footerElm = document.createElement("footer")
    footerElm.className="footer"

    footerElm.innerHTML = `
        <nav>
<ul>
    <li><a href="#home"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
    <li><a href="#archive"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
    <li><a href="#popular"><i class="fa-regular fa-star"></i>Popular</a></li>
    <li><a href="#settings"><i class="fa-solid fa-gear"></i>Settings</a></li>
</ul>
        </nav>
    `

    return footerElm
}