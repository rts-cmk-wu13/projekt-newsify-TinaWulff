
export default function button(btnText) {
    let buttonElm = document.createElement("button")
    buttonElm.classList("btnDarkMode", "btnSkip", "btnSignIn", "btnContinue")

    buttonElm.innerHTML = `
        ${btnText}
    `

    return buttonElm
}