const voto1 = Number(prompt("Digitare il primo voto:"));
const voto2 = Number(prompt("Digitare il secondo voto:"));
const voto3 = Number(prompt("Digitare il terzo voto:"));
const voto4 = Number(prompt("Digitare il quarto voto:"));
const voto5 = Number(prompt("Digitare il quinto voto:"));

if (voto1 < 1 || voto1 > 10 || voto2 < 1 || voto2 > 10 ||
    voto3 < 1 || voto3 > 10 || voto4 < 1 || voto4 > 10 ||
    voto5 < 1 || voto5 > 10)
{
    alert("Errore nella compilazione, inserisci dei voti compresi tra 1 e 10.");
}
else if (isNaN(voto1) || isNaN(voto2) || isNaN(voto3) || isNaN(voto4) || isNaN(voto5))
{
    alert("Errore nella compilazione, inserisci dei valori validi.");
}
else
{
    const media = (voto1 + voto2 + voto3 + voto4 + voto5) / 5;
    alert("La fantastica media dei voti è: " + media);
}
let isValid = true;

let indice = 0;
let somma = 0;

while ((isValid) && (indice < 5))
{
    const numero = Number(prompt("Inserisci il voto."));
    if ((numero < 1) || (numero > 10))
    {
        isValid = false;

        alert("Il numero inserito non è valido.");
    }
    else
    {
        somma += numero;
    }

    indice += 1;
}

if (isValid)
{
    alert("La media dei voti è: " + (somma / 5));
}
else
{
    alert("Hai inserito almeno un valore non valido. Riprova.");
}
