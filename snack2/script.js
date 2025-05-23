/*Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.*/



function lanciaDado() {
    return new Promise((resolve, reject) => {
        console.log("lanciando dado");
        setTimeout(() => {
            const probabilita = Math.random();
            if (probabilita < 0.2) {
                reject("dado incastrato!");
            } else {
                const dado = Math.floor(Math.random() * 6) + 1;
                resolve(`numero ${dado}`);
            }
        }, 3000);
    })



}



lanciaDado()
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error));