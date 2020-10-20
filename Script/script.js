let quest1 = document.querySelector(".quest1");
quest1.addEventListener("click", myFunction1);

function myFunction1() {
    x = document.querySelector(".answer1");
    if (x.style.display === "none") {
        x.style.display = "block";
        quest1.innerHTML = "-";
    }else {
        x.style.display = "none";
        quest1.innerHTML = "+";
    }
}

let quest2 = document.querySelector(".quest2");
quest2.addEventListener("click", myFunction2);

function myFunction2() {
    x = document.querySelector(".answer2");
    if (x.style.display === "none") {
        x.style.display = "block";
        quest2.innerHTML = "-";
    }else {
        x.style.display = "none";
        quest2.innerHTML = "+";
    }
}

let quest3 = document.querySelector(".quest3");
quest3.addEventListener("click", myFunction3);

function myFunction3() {
    x = document.querySelector(".answer3");
    if (x.style.display === "none") {
        x.style.display = "block";
        quest3.innerHTML = "-";
    }else {
        x.style.display = "none";
        quest3.innerHTML = "+";
    }
}

let quest4 = document.querySelector(".quest4");
quest4.addEventListener("click", myFunction4);

function myFunction4() {
    x = document.querySelector(".answer4");
    if (x.style.display === "none") {
        x.style.display = "block";
        quest4.innerHTML = "-";
    }else {
        x.style.display = "none";
        quest4.innerHTML = "+";
    }
}

let quest5 = document.querySelector(".quest5");
quest5.addEventListener("click", myFunction5);

function myFunction5() {
    x = document.querySelector(".answer5");
    if (x.style.display === "none") {
        x.style.display = "block";
        quest5.innerHTML = "-";
    }else {
        x.style.display = "none";
        quest5.innerHTML = "+";
    }
}

let quest6 = document.querySelector(".quest6");
quest6.addEventListener("click", myFunction6);

function myFunction6() {
    x = document.querySelector(".answer6");
    if (x.style.display === "none") {
        x.style.display = "block";
        quest6.innerHTML = "-";
    }else {
        x.style.display = "none";
        quest6.innerHTML = "+";
    }
}