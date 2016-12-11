var age = prompt("Quel est ton age?");
var sexe = prompt("fille ou garcon ?");
var nationalité = prompt("De quelle nationalité es tu ?");
age = parseInt(age);
 
if(age < 18){
	alert('Vous etes un/une ' + sexe + ' mineure ' + nationalité);

}
else{
	alert('Vous etes un/une ' + sexe + ' majeure ' + nationalité);
}

