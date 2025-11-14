/* Scrivere un programma che stampi nella console del browser,
i primi 10 numeri divisibili per tre a partire dall'input chiesto dall'utente */
let counter = 0;

let input = Number(prompt("Inserisci un numero valido."));

while (counter < 10)
{
    if (isNaN(input))
    {
        input = Number(prompt("Devi inserire un numero valido."));
        continue;
    }
    else
    {
        if (input % 3 === 0)
        {
            console.log(input);
            counter += 1;
        }
    }
}
