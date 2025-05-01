import './onboarding.scss';

import onboardingImg1 from '../imgs/onboarding/onboarding1.png';
import onboardingImg2 from '../imgs/onboarding/onboarding2.png';
import onboardingImg3 from '../imgs/onboarding/onboarding3.png';

const onboardingData = [
    {
        img: onboardingImg1,
        headline: "Stay Connected, <br> Everywhere, Anytime",
        text: "Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content."
    },
    {
        img: onboardingImg2,
        headline: "Become a Savvy <br> Global Citizen.",
        text: "Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!"
    },
    {
        img: onboardingImg3,
        headline: "Enhance your News <br> Journey Now!",
        text: "Be part of our dynamic community and contribute your insights and participate in enriching conversations."
    },
];


export default function onboarding() {
    let sectionOnboardingElm = document.createElement("section")
    sectionOnboardingElm.className="sectionOnboarding"

    sectionOnboardingElm.innerHTML = `
    
        <img class="phoneImg" src="${onboardingData[0].img}" alt="illustrative picture">
        
        <div class="onboarding-info">
            <h1>${onboardingData[0].headline}</h1>
            <p>${onboardingData[0].text}</p>
            <div class=advanced-icons>
                <span class="active"></span>
                <span></span>
                <span></span>
            </div>
        <button class="btnSkip">Skip</button>
        <button class="btnContinue">Continue</button>
        </div>

    
        
    `

    return sectionOnboardingElm
}