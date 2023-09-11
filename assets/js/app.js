/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data. */

const { createApp } = Vue

createApp({
    data() {
        return {
            welcomeMessage: "Welcome to Vue",
            loremImg: "https://picsum.photos/400/400",
        }
    }
}).mount('#app')