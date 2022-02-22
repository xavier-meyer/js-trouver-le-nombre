// Elements du DOM
const divVies = document.querySelector(".vies");
const message = document.getElementById("message");
const formulaire = document.getElementById("inputBox");
const input = document.getElementById("number");
const essayerBtn = document.getElementById("essayerBtn");
const rejouerBtn = document.getElementById("rejouerBtn");
const body = document.getElementsByTagName("body")[0];
// modéles de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';
// fond
const bgFroid = 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const bgBrulant = 'linear-gradient(120deg, #ff0844 0%, #ffb199 100%)';
const bgChaud = 'linear-gradient(120deg, #9795f0 0%, #fbc8d4 100%)';

const bgWin = "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800";
const bgLoose = 'linear-gradient(60deg, #29323c 0%, #485563 100%';

// PLAY :
const play = () => {
    // nombre aléatoire
    // Math.random => generer un nombre aléatoire entre 0 et 1 (1 exclu)
    // Math.floor => renvoi le plus grand entier inférieur ou égal au nombre
    const randomNumber = Math.floor(Math.random() * 101);
    const totalVies = 5;
    let vies = totalVies;
    console.log(randomNumber);
    rejouerBtn.style.display = "none";
// actualisation à chaque essai- Toute la logique
    formulaire.addEventListener("submit", (e) => {
        e.preventDefault(); //preventDefault => empêcher envoi du formulaire
        const valeurInput = parseInt(input.value); 
        if(valeurInput < 0 || valeurInput > 100) return; // return => arrêt du formulaire
        if(valeurInput === randomNumber){
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !!! Le nombre était bien ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }// on definit le comportement en fct de la valeur du nombre 
        if(valeurInput !== randomNumber){
            if(randomNumber < valeurInput + 3 && randomNumber > valeurInput -3){
                body.style.backgroundImage = bgBrulant;
                message.textContent = "C'est brûlant !!!";
            }else if(randomNumber < valeurInput + 6 && randomNumber > valeurInput -6){
                body.style.backgroundImage = bgChaud;
                message.textContent = "C'est chaud !!!";
            }else if(randomNumber < valeurInput + 11 && randomNumber > valeurInput -11){
                body.style.backgroundImage = bgTiede;
                message.textContent = "C'est tiède";
            }else{
                body.style.backgroundImage = bgFroid;
                message.textContent = "C'est Froid";
            }
            vies--;
            verifyLoose();// on lance la fonction verifyLoose
        } 
        actualiseCoeurs(vies);
    })// on definit la fonction verifyLoose
    const verifyLoose = () => {
        if(vies === 0){
            body.style.backgroundImage = bgLoose;
            body.style.color = '#990000';
            essayerBtn.setAttribute("disabled", "") // set attribute => désactiver le bouton
            message.textContent = `Vous avez perdu. Le nombre était ${randomNumber}`;
            rejouerBtn.style.display = "block";// réactiver bouton pour rejouer 
        }
    }// on ajoute ou enleves un certain nombre de coeur au tableau
    const actualiseCoeurs = (vies) => {
        divVies.innerHTML = "";
        let tableauDeVies = [];
        for(let i = 0; i < vies; i++){
            tableauDeVies.push(coeurPlein);
        }
        for(let i = 0; i < totalVies - vies; i++){
            tableauDeVies.push(coeurVide);
        }
        tableauDeVies.forEach(coeur => {
            divVies.innerHTML += coeur;
        })
    }
    actualiseCoeurs(vies);
    // forcer rechargement de la page
    rejouerBtn.addEventListener("click", () => {
        message.style.display = "none";
        document.location.reload(true);
    })
}   
play();