
TO DO VIGTIGE:

-> swipe og gem i local storage og vise på archive side
! OBS mangler at lave slette logikken
        - implementering af at tænde og slukke for kategorier
-> implementering af dark-mode

-> cookie-banner

-> tjek opgaveliste i read-me filen





Efter ovenstående ->:
            - splasch screen
            - On-boarding sider
            - onboarding funktionalitet: skifter indholdet på klik "continue", på 3. klik continue(når vi er nået til enden af arrayet, skift routing til login-siden)
            - SKIP-knap skipper frem til login.
-> (?)lav funktion så onboarding kun vises hvis det er første gang man kommer til siden(?)
            - login side
-> funktionalitet til login
-> log in/out button på settings

-> search formular for forside

-> (overskrifter på siderne, bedre UX)



-> logik om routing:

hvis der er logget in -> skip log-in site og onboarding
else if {
det er første gang siden besøges -> vis splash og derefter vis onboarding (evt som owerlay på homepage? så det er et "gallery" der vises henover home.page mens denne "loades")??
} else if {
 session storage er tom (siden er åbnet i ny session("ny indgang til siden")) {
    vis splash screen ('imiterer en loader', skal evt vises on top of page while the page is loading)
 }
 else {
    åben siden på homePage
 }
}
show splash green 







NOTER:
->  createDocumentFragment()
createDocumentFragment() er en metode i JavaScript, der skaber en såkaldt "document fragment" – altså en midlertidig, usynlig container i DOM'en, som du kan bygge eller manipulere elementer i, før du indsætter dem i selve dokumentet.

Hvorfor bruge createDocumentFragment()?
Det handler primært om performance og effektiv DOM-manipulation.

Når du tilføjer mange elementer direkte til DOM'en ét ad gangen, så bliver browseren nødt til at reflow og repaint hver gang – det kan være tungt og langsomt.

Ved at bruge et DocumentFragment kan du:

Oprette og tilføje mange DOM-elementer i et midlertidigt fragment.

Gøre al manipulation (f.eks. appendChild, classList.add, setAttribute, osv.) uden at påvirke den synlige DOM.

Til sidst indsætte hele fragmentet i DOM’en med én enkelt operation – det er hurtigere og mere effektivt.

Hvad er et DocumentFragment?
Det er et letvægts-objekt, der fungerer som en beholder for DOM-elementer. Når du indsætter et fragment i DOM’en, bliver dens børn indsat, men selve fragmentet forsvinder – som en usynlig mellemstation.






popular fetch eksemple: https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey

	/viewed/{period}.json

    api key: tAu7Fn8BMFeqpiVtGcgFfvtCPyCyjetp

