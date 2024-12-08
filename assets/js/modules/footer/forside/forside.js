import { getPosters } from "../../../main.js";

export const myFetch = async (url, method = 'GET') => {
	try {
		const options = {
			method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			}
		};

		console.log('Attempting fetch from:', url);
		
		const response = await fetch(url, options);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const data = await response.json();
		return data;
		
	} catch (error) {
		console.error('Fetch error details:', error);
		throw error;
	}
}



export const buildForside = async () => {
	


    const app = document.getElementById('app')

    const forsideSection = document.createElement('section')
    forsideSection.setAttribute('id', 'forsideSection')
    app.appendChild(forsideSection)

    const forsideHero = document.createElement('img');
    forsideHero.setAttribute('id', 'forsideHero')
    forsideHero.src = `/assets/img/Hero.png`
    forsideSection.appendChild(forsideHero)

    const forsideH2 = document.createElement('h2');
    forsideH2.setAttribute('id', 'forsideH2')
    forsideH2.innerText = `Fire tilfældige plakater`
    forsideSection.appendChild(forsideH2)

    const forsideCardSection = document.createElement('section')
    forsideCardSection.setAttribute('id', 'forsideCardSection')
 
    forsideSection.appendChild(forsideCardSection)

	const data = await getPosters()
	data.slice(0,4).forEach(poster => {
	
	console.log(poster);

    const posterFigure = document.createElement('figure');
    posterFigure.classList.add('poster-figure');

    const posterImage = document.createElement('img');
    posterImage.src = poster.image_url;
    posterImage.alt = poster.name;
    posterFigure.appendChild(posterImage);

    const posterTitle = document.createElement('figcaption');
    posterTitle.innerText = poster.name;
    posterFigure.appendChild(posterTitle);

    const posterDescription = document.createElement('p');
    posterDescription.innerText = poster.description || 'No description available';
    posterFigure.appendChild(posterDescription);

    const posterGenre = document.createElement('p');
    posterGenre.innerText = `Genre: ${poster.genre || 'Unknown'}`; // Assuming genre is part of the poster object
    posterFigure.appendChild(posterGenre);

    const readMoreButton = document.createElement('button');
    readMoreButton.innerText = 'Read More';
    readMoreButton.onclick = () => {
        window.location.href = `/posters/${poster.slug}`;
    };
    posterFigure.appendChild(readMoreButton);

    forsideCardSection.appendChild(posterFigure);

	});


	
}