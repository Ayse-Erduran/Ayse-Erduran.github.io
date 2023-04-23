function getSelectedLanguage() {
    const currentPage = window.location.href;
    let selectedLanguage = "en";
    if(currentPage.search("/el/") > -1) {
        selectedLanguage = "el";
    }
    return selectedLanguage;
}

function getSelectedCategory() {
    const currentPage = window.location.href;
    let selectedCategory = "";
    if(getSelectedLanguage() == "en") {
        selectedCategory = currentPage.split("/")[3].split(".html")[0];
    } else {
        selectedCategory = currentPage.split("/")[4].split(".html")[0];
    }
    return selectedCategory;
}

function updateLangStyles() {
    const enButton = document.getElementsByName("en")[0];
    const elButton = document.getElementsByName("el")[0];
    if(getSelectedLanguage() == "en") {
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
    const unspeakables = document.getElementsByClassName("navbar-unspeakables")[0];
    [description, resources, participants, sponsors, archive, unspeakables].forEach(cat => cat.classList.remove('selected-category'));
    switch(getSelectedCategory()) {
        case "description":
            description.classList.add('selected-category');
            return;
        case "participants":
            participants.classList.add('selected-category');
            return;
        case "resources":
            resources.classList.add('selected-category');
            return;
        case "sponsors":
            sponsors.classList.add('selected-category');
            return;
        case "archive":
            archive.classList.add('selected-category');
            return;
        case "unspeakables":
            unspeakables.classList.add('selected-category');
            return;
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
    workshopsButton.classList.toggle('selected-category');
    roundTablesButton.classList.toggle('selected-category');

    const roundTablesInfo = document.getElementById("round-tables-info");
    const workshopsInfo = document.getElementById("workshops-info");
    roundTablesInfo.classList.toggle('hidden');
    workshopsInfo.classList.toggle('hidden');
}

function contact() {
    window.open('mailto:np255@columbia.edu,ssg93@columbia.edu');
}

function sendEmail(emailAddress) {
    window.open('mailto:' +  emailAddress);
}


function selectLanguage(newLang) {
    const prevLang = getSelectedLanguage();
    const oldUrl = window.location.href;
    let newUrl;
    if(prevLang == "en") {
        const oldUrlArr = oldUrl.split("/");
        oldUrlArr.splice(3, 0, "el");
        newUrl = oldUrlArr.join("/");
    } else {
        newUrl = oldUrl.replace("el/", "");
    }
    window.location.href = newUrl;
}


function getAuth() {
    const oldUrlArr = window.location.href.split("/");
    const newUrl = oldUrlArr.slice(0, oldUrlArr.length - 1).join("/");
    if(localStorage.getItem('verifiedUser')) {
        window.location.href = newUrl + "/unspeakables.html";
    } else {
        window.location.href = newUrl + "/signin.html";
    }
}

/*function displayAcknowledgementPrompt() {
   const storedUserEmail = localStorage.getItem('acknowledgedEmail');
   if(!storedUserEmail) {
    const email = prompt("This section contains sensitive material that some readers might find disturbing. Please do not share or upload any of the content. Enter your email address to acknowledge this message and access the page");
    //validate address. 
    localStorage.setItem('acknowledgedEmail', email);
    saveToFirebase(email);
    // send verification email
    // once the verification email is clicked send an email to myself via firebsae
   } 
   const oldUrl = window.location.href;
   const oldUrlArr = oldUrl.split("/");
   const newUrl = oldUrlArr.slice(0, oldUrlArr.length - 1).join("/") + "/unspeakables.html";
   window.location.href = newUrl;
}*/
      

/*const database = firebase.database();
function saveToFirebase(email) {
    console.log("INSIDE SAVE TO FIREBASE!");
    database.ref('/acknowledgement-emails/').set({email})
    .then(function(snapshot) {
        console.log("SUCCESSFULLY WRITTEN!");
        success(); // some success method
    }, function(error) {
        console.log('error' + error);
        error(); // some error method
    });
}*/
