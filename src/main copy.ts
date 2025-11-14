/* Scrivere un programma che 
step 1: Dati due numeri interi in input calcolare il mcm tra i due.
step 2: dati due numeri interi in input calcolare il mcd tra i due. */
const scelta = prompt("Scegli se calcolare MCM o MCD");
let input1 = Number(prompt("Inserisci il primo numero valido."));
let input2 = Number(prompt("Inserisci il secondo numero valido."));
let conferma = false;
let resto = 0;
if (scelta === "MCD" || scelta === "mcd")
{
    while (!conferma)
    {
        if (isNaN(input1) || isNaN(input2))
        {
            input1 = Number(prompt("Devi inserire un numero valido."));
            input2 = Number(prompt("Devi inserire un numero valido."));
            continue;
        }
        else
        {
            while (resto !== 0)
            {
                resto = input1 % input2;
                if (resto === 0)
                {
                    conferma = true;
                    const MCD = (input1 * input2) / input2;
                    console.log("Il MCD è: " + MCD);
                }
                else
                {
                    input1 = input2;
                    input2 = resto;
                }
            }
        }
    }
}
else if (scelta === "MCM" || scelta === "mcm")
{
    while (!conferma)
    {
        if (isNaN(input1) || isNaN(input2))
        {
            input1 = Number(prompt("Devi inserire un numero valido."));
            input2 = Number(prompt("Devi inserire un numero valido."));
            continue;
        }
        else
        {
            while (resto !== 0)
            {
                resto = input1 % input2;
                if (resto === 0)
                {
                    conferma = true;
                    const MCD = (input1 * input2) / input2;
                    const MCM = (input1 * input2) / MCD;
                    console.log("Il MCM è: " + MCM);
                }
                else
                {
                    input1 = input2;
                    input2 = resto;
                }
            }
        }
    }
}
