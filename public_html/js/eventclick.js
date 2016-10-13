/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function bouton1() {
    var divtitre = document.getElementById("titre");
    divtitre.innerHTML = "il n'a pas dit bonjour, du coup...";

}

function bouton2() {
    var div2 = document.getElementsByClassName("menu");
    for (i = 0; i < div2.length; i++) {
        var tag = div2[i];
        tag.innerHTML = "coucou"; //marche po
    }
}

function bouton3() {
    /*var inpu2 = document.getElementById("text").value.toUpperCase();
    var lol = document.getElementById("titre");
    lol.innerHTML = inpu2;*/
    document.getElementById("titre").innerHTML=document.getElementById("text").value.toUpperCase();
}