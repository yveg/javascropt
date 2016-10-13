/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nb = Math.round(100 * Math.random());
console.log(nb);
var coup = 0;
var nbe = prompt("entrer un nombre entre 0 et 100");
if (nb == nbe) {
    alert("gagné! nb vaut: " + nb);
}

do
{
    coup = coup + 1;
    if (nbe > nb) {
        console.log("trop grand! nb vaut: " + nb)
    }
    if (nbe < nb) {
        console.log("trop petit! nb vaut: " + nb)
    }
    if (nb == nbe) {
        console.log("gagné! nb vaut: " + nb);
        break;
    }
} while (nb != nbe && coup < 3);
console.log("perdu nb valait:" + nb);