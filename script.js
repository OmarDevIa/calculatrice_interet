function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value; 
var interest = principal * years * rate / 100;
var amount = parseInt(principal) + parseFloat(interest);
var result = document.getElementById("result");

//Écrivez la logique pour convertir le ‘Nombre d’années’ en l’année réelle dans le futur. Cela peut être fait en ajoutant le nombre d’années (years) à l’année actuelle à l’intérieur de la fonction compute().
var year = new Date().getFullYear() + parseInt(years);

if (principal <= 0) {
    alert('Please enter a positive number!');
    document.getElementById("principal").focus();
}
else {
    // result.innerHTML = "إذا قمت بإيداع TND " + "<mark>" + principal + "</mark>" + ",\<br\> بمعدل فائدة قدره " + "<mark>" + rate + "%" + "</mark>" + "\<br\> ستتلقى مبلغ قدره " + "<mark>" + amount + "</mark>" + ",\<br\> في السنة " + "<mark>" + year + "</mark>" + "\<br\>";

     result.innerHTML = "If you deposit TND" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of TND" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
} 
}
        //Créez une fonction vide appelée updateRate(). Cela sera utilisé pour afficher la valeur du curseur ‘Taux’.
function updateRate() {
    //Indice : le curseur Rate est l’élément avec un id 
    var rateval =document.getElementById("rate").value
//Modifiez la valeur du <span id="rate_val"> pour afficher la valeur de la variable rateval créée ci-dessus.
document.getElementById("rate_val").innerText=rateval;

}
