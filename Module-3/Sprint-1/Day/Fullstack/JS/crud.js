import {url} from "../metadata.js";
const nameInput = document.getElementById("name");
const addBTN = document.getElementById("addBTN");
const contactList = document.getElementById("contactList");
import { URL } from "../metadata.js";

// //creation
// addBTN.addEventListener("click", async () => {
//     const name = nameInput.value;
//     fetch(`${url}/contacts.json`, {
//         method: "POST",
//         body: JSON.stringify({ name }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(() => {
//         // Handle success
//     }).catch((err) => {
//         // Handle error
//     });
// }); 


addButton.onClick = function() {
    const n = nameInput.value;
    fetch(`${URL}.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: n})
    })
    .then(response => response.json())
    .then(data => {
        nameInput.value = '';
        loadData(); // function to be created for reading data
    });
};
function loadData() {
    fetch(`${URL}.json`)
    .then(response => response.json())
    .then(data => {
        list.innerHTML = "";
        for(let key in data) {
            list.innerHTML += `<li>${data.name}</li>`;
        }
    });
}