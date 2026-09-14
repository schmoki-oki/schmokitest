const fragen = [

    {
        frage: "Ist der Himmel blau?",
bild: "bilder/Gadse.png",
        antworten: ["Ja", "Nein"],
        richtig: "Ja"
    },

    {
        frage: "1+1=?",
bild: "bilder/huh.jpg",
        antworten: ["1", "2", "3"],
        richtig: "2"
    },

    {
        frage: "Ist Feuer heiß?",
bild: "bilder/cry.jpg",
        antworten: ["Ja", "Nein"],
        richtig: "Ja"
    },

    {
        frage: "Wie viele Monate hat ein Jahr?",
bild: "bilder/peace.png",
        antworten: ["365", "10", "12", "13"],
        richtig: "12"
    },

    {
        frage: "Ist Luna cool? :P",
bild: "bilder/kitty.webp",
        antworten: ["Hmm", "Ja!", "Nein"],
        richtig: "Ja!"
    },

    {
        frage: "Sind Hasen süß?",
bild: "bilder/katze.PNG",
        antworten: ["Ja", "Nein"],
        richtig: "Ja"
    }

];


let aktuelleFrage = 0;
let punkte = 0;


function zeigeFrage() {

    const frage = fragen[aktuelleFrage];

    document.getElementById("frage").innerText = frage.frage;
document.getElementById("frageBild").src = frage.bild;

    const buttons = [
        document.getElementById("antwort1"),
        document.getElementById("antwort2"),
        document.getElementById("antwort3"),
        document.getElementById("antwort4")
    ];

    for (let i = 0; i < buttons.length; i++) {

        if (frage.antworten[i] !== undefined) {

            buttons[i].innerText = frage.antworten[i];
            buttons[i].style.display = "inline-block";

        } else {

            buttons[i].style.display = "none";
        }
    }
}


function antwort(auswahlNummer) {

    const frage = fragen[aktuelleFrage];

    const gewaehlteAntwort = frage.antworten[auswahlNummer];

    const buttons = [
        document.getElementById("antwort1"),
        document.getElementById("antwort2"),
        document.getElementById("antwort3"),
        document.getElementById("antwort4")
    ];

    if (gewaehlteAntwort === frage.richtig) {

        punkte++;

        document.getElementById("ergebnis").innerText = "Richtig!";

    } else {

        document.getElementById("ergebnis").innerText =
            "Falsch! Richtig wäre: " + frage.richtig;

        for (let i = 0; i < frage.antworten.length; i++) {

            if (frage.antworten[i] === frage.richtig) {
                buttons[i].style.border = "3px solid green";
            }
        }
    }

    setTimeout(function() {

        aktuelleFrage++;

        document.getElementById("ergebnis").innerText = "";

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.border = "";
        }

        if (aktuelleFrage < fragen.length) {
            zeigeFrage();
        } else {
            quizBeenden();
        }

    }, 2000);
}


function quizBeenden() {

    document.getElementById("frage").innerText =
        "Du hast " + punkte + " von " + fragen.length + " Fragen richtig. Danki fürs spielen <3";

document.getElementById("frageBild").style.display = "none";

    document.getElementById("antwort1").style.display = "none";
    document.getElementById("antwort2").style.display = "none";
    document.getElementById("antwort3").style.display = "none";
    document.getElementById("antwort4").style.display = "none";
document.getElementById("abschlussBild").src = "bilder/kitty.webp";
document.getElementById("abschlussBild").style.display = "block";
}


function quizStarten() {

    document.getElementById("startseite").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    zeigeFrage();
}