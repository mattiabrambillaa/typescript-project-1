/* Scrivere una funzione che chieda all'utente di inserire un numero, 
la funzione deve certificare che il numero dell'utente sia obbligatoriamente valido
e compreso tra 1 e 10 (inclusi)

Qualora non sia così il programma deve continuare a chiedere un numero valido all'utente */
function numeroutente()
{
    const numero = Number(prompt("Inserisci un numero compreso tra 1 e 10 (inclusi):"));
    if (isNaN(numero) || numero < 1 || numero > 10)
    {
        alert("Numero non valido. Riprova.");
        numeroutente();
    }
    else
    {
        alert("Numero valido inserito: " + numero);
    }
}
numeroutente();
