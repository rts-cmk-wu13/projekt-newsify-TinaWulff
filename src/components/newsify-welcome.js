import logo from "../imgs/newsify_logo.svg"

export default function newsifyWelcome() {
    let sectionElm = document.createElement("section")
    sectionElm.className="login-section"

    sectionElm.innerHTML = `
    <div>
    <img class="logo-login" src="${logo}" alt="newsify logo">
    <h1>Newsify</h1>
    <p>Welcome! Let's dive info your account!</p>
    </div>     
    `
    return sectionElm
} 