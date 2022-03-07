var text = document.getElementById("text").innerText;
let x = 0;
var ans = document.getElementById("ans");
var split = text.split('')
let er = 0;
let _top = 0;
var username = localStorage.getItem("typeuser")
let High = 0;
document.addEventListener('keypress', function(event) {
    key = event.key.split('');
    console.log(split)
    document.getElementById("text").classList.remove("error")
    // High = localStorage.getItem("Score: ")
    // document.getElementById("high").innerHTML = "Last High Score: " + High;
    // if (High > x) {
    //     _top = High;
    //     document.getElementById("top").innerHTML = "Top Score: " + _top;
    // }
    // console.log("Top", _top)
    if (split[x] == key[0]) {
        console.log(text.charAt(x).toString().fontcolor("green"))
        ans.innerHTML += text.charAt(x).toString().fontcolor("red")
        a = split[x].toString()
        playSound();
        x = x + 1;

        if (x == 588) {
            document.getElementById("cont").style.display = "none"
            document.getElementById("over").innerText = "Finished";
        }

    } else {
        console.log("wrong")
        setTimeout(function() {
            document.getElementById("text").style.color = "black";

        }, 1000);
        error();
        document.getElementById("text").style.color = "red";
    }

});

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}

function error() {
    var sound = document.getElementById("error");
    sound.play();
    er += 1;
    document.getElementById("er").innerText = "Error : " + er;
}

var timeleft = 300;
var downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
    }
    document.getElementById("progressBar").value = 300 - timeleft;
    timeleft -= 1;
    if (timeleft == -1) {
        document.getElementById("er").style.display = "none";
        document.getElementById("over").innerHTML = "Hello! " + username + "<br>" + "Game Over !" + "<br>" + "Your Score is : " + x + "<br>" + "Your Error is : " +
            er;
        document.getElementById("cont").style.display = "none"
        localStorage.setItem("Name: ", user);
        localStorage.setItem("Score: ", x);
        localStorage.setItem("Error: ", er);

    }


}, 1000);