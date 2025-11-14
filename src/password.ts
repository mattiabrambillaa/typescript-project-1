// scrivere un progtamma che chieda all'utente di inserire una password.
// verificare che la password soddisfi questi requisiti:
// - almeno 8 caratteri
// - almeno una lettera minuscola
// - almeno una lettera maiuscola
// - almeno un numero
// - almeno un carattere speciale tra !@#$%^&*
// - non deve contenere due caratteri ripetuti consecutivamente
// Tutte le regole non soddisfatte dovranno essere stampate a schermo usando la concatenazione.

const messaggio = "Inserisci una password che soddisfi i seguenti requisiti:\n" +
    "- almeno 8 caratteri\n" +
    "- almeno una lettera minuscola\n" +
    "- almeno una lettera maiuscola\n" +
    "- almeno un numero\n" +
    "- almeno un carattere speciale tra !@#$%^&*._-\n" +
    "- non deve contenere due caratteri ripetuti consecutivamente";
function validazionePassword()
{
    const password = prompt(messaggio);
    const lunghezza = Number(password?.length);
    if (password === null)
    {
        alert("Nessuna password inserita.");
        validazionePassword();
    }
    else
    {
        let errori = "";
        let checkMinuscolo = false;
        let checkMaiuscolo = false;
        let checkNumero = false;
        let checkSimboli = false;
        let checkDoppie = false;
        const CaratteriSpeciali = ",.-;:_><#@§+[]*{}()!$%&/=?^`|~";
        // Controllo lunghezza password

        if (lunghezza < 8)
        {
            errori += "- La password contiene meno di 8 caratteri.\n";
        }
        // Controllo maiuscole

        for (let i = 0; i < lunghezza; i += 1)
        {
            const lettera = password[i];
            if (lettera >= "A" && lettera <= "Z")
            {
                checkMaiuscolo = true;
            }
        }
        if (!checkMaiuscolo)
        {
            errori += "- La password non contiene lettere maiuscole.\n";
        }
        // Controllo minuscole

        for (let i = 0; i < lunghezza; i += 1)
        {
            const lettera = password[i];
            if (lettera >= "a" && lettera <= "z")
            {
                checkMinuscolo = true;
            }
        }
        if (!checkMinuscolo)
        {
            errori += "- La password non contiene lettere minuscole.\n";
        }
        // Controllo numeri

        for (let i = 0; i < lunghezza; i += 1)
        {
            const lettera = password[i];
            if (lettera >= "0" && lettera <= "9")
            {
                checkNumero = true;
            }
        }
        if (!checkNumero)
        {
            errori += "- La password non contiene numeri.\n";
        }
        // Controllo simboli

        for (let i = 0; i < lunghezza; i += 1)
        {
            const lettera = password[i];
            if (CaratteriSpeciali.includes(lettera))
            {
                checkSimboli = true;
            }
        }
        if (!checkSimboli)
        {
            errori += "- La password non contiene caratteri speciali.\n";
        }
        // Controllo caratteri doppi

        for (let i = 0; i < lunghezza; i += 1)
        {
            const lettera = password[i];
            const letteraSuccessiva = password[i + 1];
            if (lettera == letteraSuccessiva)
            {
                checkDoppie = true;
            }
        }
        if (checkDoppie)
        {
            errori += "- La password contiene caratteri ripetuti consecutivamente.\n";
        }
        // Risultato finale

        if (errori === "")
        {
            alert("La password è valida!");
        }
        else
        {
            alert("La password presenta i seguenti problemi: \n\n" + errori);
        }
    }
}
validazionePassword();
