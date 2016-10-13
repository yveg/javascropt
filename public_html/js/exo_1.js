/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nb = Math.round(100 * Math.random());
console.log(nb);
var coup = 0;
var nbe;


 do {
            nbe = prompt("entrer un nombre entre 0 et 100");
            coup=coup+1;
            if (nb > nbe) {
                alert("trop petit! tu as le droit a : "+ (3-coup)+" coup");
            } else if (nb < nbe) {
                alert("trop grand! tu as le droit a : "+ (3-coup)+" coup");
            }
            if (coup>2) {alert("perdu, le nb était:" +nb); break; }
        } while (nb != nbe); 
                             if (coup<3) {appreciation="gagné"; 
        }