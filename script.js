function load() {
    for (let x = 0; x < 8; x++) {
        document.getElementById("area").innerHTML += '<div id="' + x + '"></div>'
        for (let y = 0; y < 8; y++) {
            document.getElementById(x).innerHTML += '<div id="' + x + '' + y + '" class="pixel"></div>'
        }
        document.getElementById("area").innerHTML += '<br>'
    }
    eyes = ["22", "52"]
    mouth = ["25", "35", "45", "55"]
    hair = ["00", "10", "20", "30", "40", "50", "60", "70"]
}

function randomize() {
    for (i = 0; i < 10; i++) {
        outerArea = document.getElementById("outerArea").cloneNode(true)
        outerArea.id = "outerArea" + String(i)
        outerArea.firstElementChild.remove()
        document.body.appendChild(outerArea)
        for (j = 0; j < 10; j++) {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var randomHair = Math.floor(Math.random() * 16777215).toString(16);
            var randomEyes = Math.floor(Math.random() * 10)
            var randomMouthCol = Math.floor(Math.random() * 16777215).toString(16);
            var randomMouth = Math.floor(Math.random() * 10)
            for (let x = 0; x < 8; x++) {
                for (let y = 0; y < 8; y++) {
                    colour = false
                    for (let z = 0; z < eyes.length; z++) {
                        if (document.getElementById(String(x) + String(y)) == document.getElementById(eyes[z])) {
                            if (randomEyes == 1) {
                                document.getElementById(String(x) + String(y)).style.backgroundColor = "white";
                            } else {
                                document.getElementById(String(x) + String(y)).style.backgroundColor = "black";
                            }
                            colour = true
                            break
                        }
                    }
                    for (let z = 0; z < mouth.length; z++) {
                        if (document.getElementById(String(x) + String(y)) == document.getElementById(mouth[z])) {
                            if (randomMouth == 1) {
                                document.getElementById(String(x) + String(y)).style.backgroundColor = "#" + randomMouthCol;
                            } else {
                                document.getElementById(String(x) + String(y)).style.backgroundColor = "black";
                            }
                            colour = true
                            break
                        }
                    }
                    for (let z = 0; z < hair.length; z++) {
                        if (document.getElementById(String(x) + String(y)) == document.getElementById(hair[z])) {
                            document.getElementById(String(x) + String(y)).style.backgroundColor = "#" + randomHair;
                            colour = true
                            break
                        }
                    }
                    if (colour == false) {
                        document.getElementById(String(x) + String(y)).style.backgroundColor = "#" + randomColor;
                    }
                }
            }
            finalImg = document.getElementById("area").cloneNode(true)
            finalImg.id = "area" + String(i) + String(j)
            document.getElementById("outerArea" + String(i)).appendChild(finalImg)
        }
    }
}
