const githubProfil = "https://github.com/Ceda1998";
const githubJoin = "https://github.com/Ceda1998/join"
const githubWeatherApp = "https://github.com/Ceda1998/WeatherApp"
const githubPokedex = "https://github.com/Ceda1998/PokeDex"
const projectJoin = "http://join.cedricdaunke.de"
const projectWeatherApp = "http://weatherapp.cedricdaunke.de"
const projectPokedex = "http://pokedex.cedricdaunke.de";
const reaperStudio = "https://reaper-studio.com/";

function goToSite(url) {
    window.open(url, '_blank').focus();
}

function downloadCV() {
    window.open("./Cedric Daunke.pdf", '_blank').focus();
}

function toggleMobileMenu() {
    let mobileMenu = document.getElementById('mobileNavigation');
    console.log(mobileMenu);
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none'
        console.log('schließt Menü')
    } else {
        mobileMenu.style.display = 'block'
    }
}

//emailjs
  (function() {
    
    emailjs.init({
      publicKey: "Aka_z9E4qI2qgztCs",
    });
})();

  window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_ked95ii', 'template_yxpxl67', this)
            .then(() => {
                console.log('SUCCESS!');
                this.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}