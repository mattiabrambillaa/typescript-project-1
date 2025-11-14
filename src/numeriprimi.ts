/* Scrivere un programma che stampi nella console del browser,
il primo numero primo successivo a quello richiesto dall'utente */
let isPrime = false;
let counter = 0;
let input = Number(prompt("Inserisci un numero valido."));
while (!isPrime)
{
    if (isNaN(input))
    {
        input = Number(prompt("Devi inserire un numero valido."));
        continue;
    }
    while (counter < 5)
    {
        isPrime = true;
        input += 1;
        if (input % 2 == 0)
        {
            isPrime = false;
        }
        else
        {
            let divisor = 3;
            while (isPrime && (divisor <= Math.sqrt(input)))
            {
                if (input % divisor == 0)
                {
                    isPrime = false;
                }
                divisor += 2;
            }
        }
    }
    counter += 1;
    console.log("Il numero primo successivo è: " + input);
}
