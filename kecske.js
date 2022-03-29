window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}

function CLS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
    /*Készítő nevének megváltoztatása*/
    $('footer p')[0].innerHTML = "Katona Valentin";
    $('footer p')[0].style.textAlign = "center";
    $('footer.p')[0].style.fontSize = "20px";
    
    var tomb = document.querySelectorAll('#bal img');
    for(let index = 0; index < kepTomb.length; index++){
        kepTomb[index].addEventListener("click", kepEleres)
    }
}