// Elements du DOM
const divvies = document.querySelector(".vies");
const message = document.getElementById("message");
const formulaire = document.getElementById("inmputBox");
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

const bgWin = "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800";
const bgLoose = 'linear-gradient(60deg, #29323c 0%, #485563 100%';

// PLAY :
const play = () => {
    // nombre aléatoire
    // math.random => generer un nombre aléatoire entre 0 et 1 (1 exclu)
    // Math.floor => renvoi le plus grand entier inférieur ou égal au nombre
    const randomNumber = Math.floor(math.random() * 101);
    const totalVies = 8;
    let vies = totalVies;
    console.log(randomNumber);

// actualisation à chaque essai- Toute la logique
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault(); //preventDefault => empêcher envoi du formulaire
        const valeurInput = parseInt(input.value); 
        if(valeurInput < 0 || valeurInput > 100) return; // return => arrêt du formulaire
        if(valeurInput === randomNumber){
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !!! Le nombre était bien ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }
        if(valeurInput !== randomNumber){
            
        }
    })    
}