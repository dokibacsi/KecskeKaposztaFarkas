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
    $('footer p')[0].style.fontSize = "20px";
    
    var kepTomb = document.querySelectorAll('#bal img');
    for(let index = 0; index < kepTomb.length; index++){
        kepTomb[index].addEventListener("click", kepEleres)
        kepTomb[index].addEventListener("mousemove", Kiemeles)
        kepTomb[index].addEventListener("mouseover", Leemeles)
    }
}
var tomb = [];
function kepEleres(event){
    tomb.push(event.target.alt); // event target = eseményt kiváltó
    console.log(tomb);

    if(tomb.indexOf("kecske") >= 0 && tomb.indexOf("farkas") >= 0){
        alert("Nem jó választás!")
        tomb.pop();
    }
    else if(tomb.indexOf("kecske") >= 0 && tomb.indexOf("kaposzta") >= 0){
        alert("Nem jó választás!")
        tomb.pop();
    }
    else{
    event.target.style.display = "none";
    var kep = '<img src=`${event.target.src}`alt=`${event.target.alt}`/>';
    console.log(kep);
    ID("csonak").innerHTML =+ kep;
}
}

function Kiemeles(event){
    console.log("kiemel")
    event.target.ClassName = "kiemel";
}

function Leemeles(event){
    event.target.ClassName = "";
}
