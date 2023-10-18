/*
*Consegna*


L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Solo se l'esercizio base funziona perfettamente: create una nuova cartella chiamata bonus e copiateci dentro tutti i files e cartelle dell'esercizio base tranne la cartella .git.
Poi procedete ad implementare il bonus come segue.
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

Minefield();

function Minefield() {

    const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        //creo una costante per il numero delle caselle
        const boxNum = 100;
        //richiamo il div dove inserirò le box
        const field = document.getElementById('field');
        console.log(field);
        //faccio in modo che prima di elaborare le boxes mi si svuoti il field
        field.innerHTML = '';
        //creo un ciclo per stampare le box
        for(let i = 1; i <= boxNum; i++) {
            let box = addBox(i,boxNum);
            field.append(box);
        };
    });

    //creo una funzione che mi generi div e aggiunga la classe alla box 
    function addBox(index, howmanyboxes) {
        //creo il div della box
        const box = document.createElement('div');
        //aggiungo la classe al div
        box.classList.add('box');
        const boxWidth = Math.sqrt(howmanyboxes);
        box.style.width = `calc(100% / ${boxWidth})`;
        box.style.height = `calc(100% / ${boxWidth})`;
        //voglio inserire dei numeri dentro alle box quindi:
        box.innerHTML = index;
        //creo una funzione che al click della box mi permetta di cambiarle colore
        box.addEventListener('click', function() {
            box.classList.add('pressed');
            box.style.color = 'var(--primary-blue)';
            console.log('hai cliccato il tasto numero:' + index)
        });
        return box;
    };
    
};



