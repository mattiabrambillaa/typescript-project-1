/* eslint-disable no-console */
/* Chiedere all'utente un indice tra 0 e 4 (compresi) 
chiedere un nuovo valore da salvare in quel posto */

const array = [10, 20, 30, 40, 50];

let a = Number(prompt("Inserisci un indice VALIDO tra 0 e 4"));
let b = Number(prompt("Inserisci un nuovo valore VALIDO da salvare in quella posizione"));

for (let i = 0; i < 5; i++)
{
    if (isNaN(a) || isNaN(b) || a < 0 || a > 4)
    {
        a = Number(prompt("Devi inserire un indice valido tra 0 e 4"));
        b = Number(prompt("Devi inserire un numero valido da salvare in quella posizione"));
        continue;
    }
    array[a] = b;
    console.log("Il nuovo array è: " + array[i]);
}
