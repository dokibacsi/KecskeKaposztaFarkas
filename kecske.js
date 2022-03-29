window.addEventListener("load", betolt);

function ID(elem){
    return document.getElementById(elem);
}

function CLS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function betolt(){
    /*Készítő nevének megváltoztatása*/
    $('footer p')[0].innerHTML = "Katona Valentin";
    $('footer p')[0].style.textAlign = "center";
    $('footer.p')[0].style.fontSize = "20px";
}