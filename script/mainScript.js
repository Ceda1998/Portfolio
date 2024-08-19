const githubProfil = "https://github.com/Ceda1998";
const githubJoin = "https://github.com/Ceda1998/join"
const githubWeatherApp = "https://github.com/Ceda1998/WeatherApp"
const projectJoin = "https://join.cedricdaunke.de"
const projectWeatherApp = "https://weatherapp.cedricdaunke.de"

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