function load() {
    for (let x = 0; x < 8; x++) {
        document.getElementById("area").innerHTML += '<div id="' + x + '"></div>'
        for (let y = 0; y < 8; y++) {
            document.getElementById(x).innerHTML += '<div id="' + x + '' + y + '" class="pixel"></div>'
        }
        document.getElementById("area").innerHTML += '<br>'
    }
    baseImg = ["22", "52", "25", "35", "45", "55"]
    hair = ["00", "10", "20", "30", "40", "50", "60", "70"]
    count = 0
}

function randomize() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var randomHair = Math.floor(Math.random() * 16777215).toString(16);
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            colour = false
            for (let z = 0; z < baseImg.length; z++) {
                if (document.getElementById(String(x) + String(y)) == document.getElementById(baseImg[z])) {
                    document.getElementById(String(x) + String(y)).style.backgroundColor = "black";
                    colour = true
                    break
                }
            }
            for (let w = 0; w < hair.length; w++) {
                if (document.getElementById(String(x) + String(y)) == document.getElementById(hair[w])) {
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
    count++
    finalImg = document.getElementById("area").cloneNode(true)
    finalImg.id = "area" + String(count)
    document.body.appendChild(finalImg)
}
