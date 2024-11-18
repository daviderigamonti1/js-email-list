/*

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*Bonus*
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

*/

"use strict";
console.clear();

const list = document.getElementById("list");
console.log(list);

function generates() {
    const arrayEmails = [];

    for (let i = 0; i < 10; i++) {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const email = result.data.response;
                console.log(email);
                arrayEmails.push(email);

                if (arrayEmails.length === 10) {
                    arrayEmails.forEach((email) => {
                        const li = document.createElement("li");
                        li.textContent = email;
                        list.appendChild(li);
                    });
                };
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", generates);