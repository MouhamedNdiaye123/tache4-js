/* Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.  

 NB: 0   à   14 ans  => Enfants

 15   à   25 ans  => Adolescents

25   à   64 ans  => Adultes

65 ans et plus  => Aînés */

let age = parseInt( prompt("Saisir votre age") );

if(age>= 0 && age <= 14){
    document.write('Enfants');
}
else if(age>= 15 && age <= 25){
    document.write('Adolescents');
}
else if(age>= 26 && age <= 65){
    document.write('Adultes');
}
else if(age >= 66){
    document.write('Aines');
}
else{
    document.write('Age introuvable');
}
