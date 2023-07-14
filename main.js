const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const openCookie = document.querySelector(".openCookie");
const closeCookie = document.querySelector(".closeCookie");
let phrase = document.querySelector(".screen2 p");

function changeToPhrase() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
    selectPhrase();
}

function changeToCookie() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function selectPhrase() {
    const randomPhrase = String(Math.round(Math.random() * 10));
    console.log(randomPhrase)

    switch(randomPhrase) {
        case "1":
            phrase.innerHTML = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.";
            break;

        case "2":
            phrase.innerHTML = "Acredite em si mesmo e siga em frente.";
            break;

        case "3":
            phrase.innerHTML = "Grandes desafios trazem grandes recompensas.";
            break;

        case "4":
            phrase.innerHTML = "A sorte está ao seu lado.";
            break;

        case "5":
            phrase.innerHTML = "A persistência é a chave para o sucesso.";
            break;

        case "6":
            phrase.innerHTML = "Aproveite as oportunidades que surgirem em seu caminho.";
            break;

        case "7":
            phrase.innerHTML = "O amor está a caminho.";
            break;

        case "8":
            phrase.innerHTML = "Seja gentil e terá amizades verdadeiras.";
            break;

        case "9":
            phrase.innerHTML = "Aprenda com seus erros e cresça cada vez mais forte.";
            break;

        case "10":
            phrase.innerHTML = "Acredite no poder dos seus sonhos.";
            break;

        case "0":
            phrase.innerHTML = "A felicidade está nas pequenas coisas da vida.";
            break;
        
        default:
            phrase.innerHTML = "Erro ao selecionar frase! Tente novamente";
            break;
    }

    return
}

openCookie.addEventListener('click', changeToPhrase);
closeCookie.addEventListener('click', changeToCookie);