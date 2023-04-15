//SET LANGUAGE STYLING:
const currentPage = window.location.href.split("/");
const selectedLanguage = currentPage[3];
const selectedCategory = currentPage[4].split(".html")[0];

function updateLangStyles() {
    const enButton = document.getElementsByName("en")[0];
    const elButton = document.getElementsByName("el")[0];
    if(selectedLanguage == "en") {
        enButton.classList.add('selected-language');
        elButton.classList.remove('selected-language');
    } else {
        enButton.classList.remove('selected-language');
        elButton.classList.add('selected-language');
    }
}

function updateCatStyles() {
    const description = document.getElementsByClassName("navbar-about")[0];
    const resources = document.getElementsByClassName("navbar-resources")[0];
    const participants = document.getElementsByClassName("navbar-participants")[0];
    const sponsors = document.getElementsByClassName("navbar-sponsors")[0];
    const archive = document.getElementsByClassName("navbar-archive")[0];
    [description, resources, participants, sponsors, archive].forEach(cat => cat.classList.remove('selected-category'));
    if(selectedCategory == "about") {
        description.classList.add('selected-category');
    } else if(selectedCategory == "participants") {
        participants.classList.add('selected-category');
    } else if(selectedCategory == "resources") {
        resources.classList.add('selected-category');
    } else if(selectedCategory == "sponsors") {
        sponsors.classList.add('selected-category');
    } else if(selectedCategory == "archive") {
        archive.classList.add('selected-category');
    }
}

updateLangStyles();
updateCatStyles();

function signUp(){
    window.open('mailto:np255@columbia.edu?cc=ssg93@columbia.edu&subject=Registration Request for Leros Humanism Seminars, July 2023', '_self');
}

function toggleStructureCategory() {
    const workshopsButton = document.getElementsByClassName("workshops-button")[0];
    const roundTablesButton = document.getElementsByClassName("round-tables-button")[0];
    const structureInfo = document.getElementById("structure-info");
    workshopsButton.classList.toggle('selected-category');
    roundTablesButton.classList.toggle('selected-category');

    const roundTablesInfo = document.getElementById("round-tables-info");
    const workshopsInfo = document.getElementById("workshops-info");
    roundTablesInfo.classList.toggle('hidden');
    workshopsInfo.classList.toggle('hidden');
}


function sendEmail(emailAddress) {
    window.open('mailto:' +  emailAddress);
}


function selectLanguage(newLang) {
    const oldUrl = window.location.href;
    const prevLang = oldUrl.split("/")[3];
    const newUrl = oldUrl.replace(`/${prevLang}/`, `/${newLang}/`);
    console.log("OLD", oldUrl);
    console.log("NEW", newUrl);
    window.location.href = newUrl;
}