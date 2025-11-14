/* Scrivere le seguenti funzioni 
- abs(value: number): number
- min(value1, value2 , number) : number
- max(value 1, value2 , number) : number
*/
let numero1 = Number(prompt("Inserisci il primo numero:"));
let numero2 = Number(prompt("Inserisci il secondo numero:"));

function abs(value1: number, value2: number): void
{
    if (numero1 < 0 || numero2 < 0)
    {
        numero1 = Math.abs(numero1);
        numero2 = Math.abs(numero2);
        return alert("Il valore assoluto del primo numero è: " + numero1 +
            "\nIl valore assoluto del secondo numero è: " + numero2);
    }
}
function min(value1: number, value2: number): void
{
    if (numero1 < numero2)
    {
        return alert("Il primo numero " + numero1 + " è il più piccolo tra i due numeri inseriti");
    }
    else if (numero2 < numero1)
    {
        return alert("Il primo numero " + numero2 + " è il più piccolo tra i due numeri inseriti");
    }
    else
    {
        return alert("I due numeri sono uguali.");
    }
}
function max(value1: number, value2: number): void
{
    if (numero1 > numero2)
    {
        return alert("Il primo numero " + numero1 + " è il più grande tra i due numeri inseriti");
    }
    else if (numero2 > numero1)
    {
        alert("Il secondo numero " + numero2 + " è il più grande tra i due numeri inseriti");
    }
    else
    {
        alert("I due numeri sono uguali.");
    }
}
abs(numero1, numero2);
min(numero1, numero2);
max(numero1, numero2);
