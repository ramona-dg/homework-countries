import axios from "axios";

console.log( "Doen mijn JS het?");

// GET Request https://restcountries.com/v2/all

// 1. Installeer de dependency axios (npm install axios)
//2. schrijf een asynchrone functie
//3. Maak een GET request met axios (await)
//4. try/catch blok om de errors af te vange
//5. element in HTML maken, referentie opslaan vanuit JS
//6. de data injecteren (map-methode)

// array connecten met html-doc
const countryList = document.getElementById('countries');
const errorMessage =  document.getElementById('error');


async function fetchCountries() {
    try {
        // het request maken
        const response = await axios.get( 'https://restcountries.com/v2/all');

        countryList.innerHTML  = `
        <li>Een van de talen is: ${response.data[0].languages[1].name} </li>
        `;

    } catch (e) {
        // error afvangen (in dit geval door de entity verkeerd te spellen)
        console.error(e);
        // errors communiceren in de UI
        console.log(e.response);
        if (e.response.status === 500){
            errorMessage.textContent = "Er ging iets mis in de server";
        } else if (e.response.status === 404){
            errorMessage.textContent = "Het verzoek is mislukt";
        }
    }
}

fetchCountries();    //functie opvangen

//---------------------------------------------------------
// JS les 5 voorbeeld om bijvoorbeeld een language op de vragen van een land
// async function fethcCountries() {
//     try {
//         // het request maken
//         const response = await axios.get( 'https://restcountries.com/v2/all');
//         console.log(response.data[0].languages[1].name);
//         // als je bijvoorbeeld languages wilt van alle landen zou zou je de map() methode gebruiken om er doorheen te mappen
//     } catch (e) {
//         // de error afvangen
//     }
// }
// //functie opvangen
// fethcCountries();
