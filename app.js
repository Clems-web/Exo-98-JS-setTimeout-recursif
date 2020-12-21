let buttonStart = document.getElementById("timeout");
let time = 0;
let intervalDiv = document.getElementById("interval-div");
let buttonStop = document.getElementById("interval-stop");

buttonStart.addEventListener("click", function () {
    setTimeout(function () {
        let creaDiv = document.createElement("div");
        let divTo = document.getElementById("timeout-div");

        creaDiv.style.width = "50%";
        creaDiv.style.marginLeft = "25%";
        creaDiv.style.marginTop = "4rem";
        creaDiv.style.height = "10rem";
        creaDiv.style.border = "1px solid black";
        creaDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
        divTo.append(creaDiv);
    },2000);

});

let buttonInterval = document.getElementById("interval-start");

buttonInterval.addEventListener("click", function () {
    let timeOut = function () {
        let inconnu = setTimeout(function () {
            intervalDiv.innerHTML = time;
            time+=60;
            timeOut();
        }, 36000);

        buttonStop.addEventListener("click", function () {
            clearTimeout(inconnu);
        })
    }
    timeOut();
});



