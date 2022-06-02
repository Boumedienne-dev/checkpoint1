/* En tant qu'utilisateur, 
je peux changer l' image de l'avatar lorsque je clique dessus */

const imgProfile = document.querySelector(".myImg");
imgProfile.addEventListener("click", function() {
    imgProfile.src = "image/avatar.svg";
});

/* En tant qu'utilisateurs, 
je peux remplacer le texte Matt sur le paragraphe par 
votre nom et sa couleur par la couleur blanche */

/* ligne 16+21+24+25 En tant qu'utilisateurs je peux remplacer 
la couleur de fond en rose par la couleur : 
#750ff7 avec la même invite et le même bouton.*/
const description = document.querySelector(".description");

const boutonMessage = document.querySelector(".buttonM");
let myName = document.querySelector('#name');

boutonMessage.addEventListener('click', () =>{
    let myColor = prompt("Quel couleur choisissez-vous?");
    let myPrompt = prompt ('Enter your name :');
    myName.innerHTML = myPrompt;
    description.style.backgroundColor = myColor;
    boutonMessage.style.backgroundColor = myColor;
});






    
