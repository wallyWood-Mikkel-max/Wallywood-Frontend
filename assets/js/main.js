import {buildNav} from './modules/nav/nav.js';
import {buildForside} from './modules/forside/forside.js';
import { buildFooter } from './modules/footer/footer.js';
import { buildListe } from './modules/lister/lister.js';
import { buildOm } from './modules/om-os/om-os.js';
import { myFetch } from './modules/forside/forside.js';

const getPosters = async () => {
    try {
        const posters = await myFetch('http://localhost:4000/posters', 'GET');
        console.log('Received posters:', posters);
    } catch (error) {
        console.error('Error fetching posters:', error);
    }
}

buildNav();
buildForside();
buildFooter();
getPosters();

const main = document.getElementById('main')

const app = document.createElement('section')
app.setAttribute('id', 'app')
main.append(app)

const forsidePlakater = document.getElementById('forsidePlakater')
const forsideText = document.getElementById('forsideText')
const navLogo = document.getElementById('navLogo')
const forsideOm = document.getElementById('forsideOm')

forsidePlakater.addEventListener("click", function (e) {
    app.innerHTML = "";
    buildListe()
   });

   forsideText.addEventListener("click", function (e) {
    app.innerHTML = "";
    buildForside()
   });

   navLogo.addEventListener("click", function (e) {
    app.innerHTML = "";
    buildForside()
   });

    forsideOm.addEventListener("click", function (e) {
    app.innerHTML = "";
    buildOm()
   });

