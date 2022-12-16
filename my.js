function landingPageAnimations(){
    window.addEventListener('load', () =>{
        document.getElementById('landingHeader').classList.toggle('landingHeaderAnimation')
        document.getElementById('landingSubHeader').classList.toggle('landingHeaderAnimation2')
    })
}

function sectionAnimations(){
    const projectSection1 = document.getElementById('projectSection1');
    const projectSection2 = document.getElementById('projectSection2');
    const projectSection3 = document.getElementById('projectSection3');
    const technologiesIUse1 = document.getElementById('technologiesIUse1');
    const technologiesIUse2 = document.getElementById('technologiesIUse2');
    const sectionArray = [projectSection1, projectSection2, projectSection3, technologiesIUse1, technologiesIUse2];

    const observer = new IntersectionObserver((entries) => { // intersection observer is declared
        entries.forEach((entry) =>{ // for each entry 
            console.log(entry)
            if (entry.isIntersecting){ // so if entry is visible with the target
                entry.target.classList.add('projectsAnimation') // add the active class to it
                observer.unobserve(entry.target) // after the classes have been added once it stops waiting for the screen to intersect with the elements
            }
            else {
                entry.target.classList.remove('projectsAnimation')
            }
        })
    })

 sectionArray.forEach(section => observer.observe(section))
}

function pageRefreshRedirect(){
    const performance = window.performance; // provides information on the pages navigation events 
    const navigation = performance.getEntriesByType("navigation")[0]; // specifying "navigation" object and selecting the 0 index activationStart
    if (navigation.type === "reload") { // if the type is equal to reload it will refresh and replace anything in url with the home index.html screen
        window.location.replace("/index.html");
    } 
}

landingPageAnimations()
sectionAnimations()
pageRefreshRedirect()