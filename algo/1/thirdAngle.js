/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80

thirdAngle(90, 50) doit renvoyer 40

60 + 80 + 40 = 180
*/

function thirdAngle(a, b) {
  // Your code here !
  return 180 - (a + b);
}

console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));
console.log(thirdAngle(90, 50));


module.exports = thirdAngle;
