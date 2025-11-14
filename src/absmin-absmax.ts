/* Scrivere le seguenti funzioni 
- absmax(value1, value2 , number) : number
- absmin(value 1, value2 , number) : number
*/
let numero1 = Number(prompt("Inserisci il primo numero:"));
let numero2 = Number(prompt("Inserisci il secondo numero:"));

function absmin(value1: number, value2: number): void
{
    if (numero1 < 0 || numero2 < 0)
    {
        numero1 = Math.abs(numero1);
        numero2 = Math.abs(numero2);
        if (numero1 < numero2)
        {
            return alert("Tra i due valori assoliuti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più piccolo è: " + numero1);
        }
        else if (numero2 < numero1)
        {
            return alert("Tra i due valori assoliuti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più piccolo è: " + numero2);
        }
    }
    else
    {
        if (numero1 < numero2)
        {
            return alert("Tra i due valori assoluti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più piccolo è: " + numero1);
        }
        else if (numero2 < numero1)
        {
            return alert("Tra i due valori assoluti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più piccolo è: " + numero2);
        }
        return alert("I due numeri sono uguali.");
    }
}
function absmax(value1: number, value2: number): void
{
    if (numero1 < 0 || numero2 < 0)
    {
        numero1 = Math.abs(numero1);
        numero2 = Math.abs(numero2);
        if (numero1 > numero2)
        {
            return alert("Tra i due valori assoliuti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più grande è: " + numero1);
        }
        else if (numero2 > numero1)
        {
            return alert("Tra i due valori assoliuti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più grande è: " + numero2);
        }
    }
    else
    {
        if (numero1 > numero2)
        {
            return alert("Tra i due valori assoluti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più grande è: " + numero1);
        }
        else if (numero2 > numero1)
        {
            return alert("Tra i due valori assoluti dei numeri inseriti: (" + numero1 + " e " + numero2 +
                ") il più grande è: " + numero2);
        }
        return alert("I due numeri sono uguali.");
    }
}
absmax(numero1, numero2);
absmin(numero1, numero2);
