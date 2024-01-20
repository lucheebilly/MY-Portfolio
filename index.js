var tabLinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(let i=0; i<tabLinks.length; i++){
        tabLinks[i].classList.remove("active-links");
    }
    for(let i=0; i<tabcontents.length; i++){
        tabcontents[i].classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right= "0";
}

function closemenu(){
    sidemenu.style.right= "-200px";
}