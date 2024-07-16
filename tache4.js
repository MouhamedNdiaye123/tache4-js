/* Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.  

 NB: 0   à   14 ans  => Enfants

 15   à   25 ans  => Adolescents

25   à   64 ans  => Adultes

65 ans et plus  => Aînés */

let age = parseInt( prompt("Saisir votre age") );

if(age>= 0 && age <= 14){
    alert('Vous etes un Enfant');
}
else if(age>= 15 && age <= 25){
    alert('Vous etes un Adolescent');
}
else if(age>= 26 && age <= 65){
    alert('Vous etes un Adulte');
}
else if(age >= 66){
    alert('Vous etes un Aine');
}
else{
    alert('Age introuvable');
}
