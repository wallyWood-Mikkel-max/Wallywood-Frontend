export const myFetch = async (url, method = 'GET') => {
	try {
		const options = {
			method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include'
		};

		console.log('Fetching from:', url, 'with options:', options);
		
		const response = await fetch(url, options);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const data = await response.json();
		return data;
		
	} catch (error) {
		console.error('Fetch error:', error.message);
		throw error; // Re-throw the error so we can handle it where the function is called
	}
}


export const buildForside = () =>{
    const app = document.getElementById('app')

    const forsideSection = document.createElement('section')
    forsideSection.setAttribute('id', 'forsideSection')
    app.append(forsideSection)

    const forsideHero = document.createElement('img');
    forsideHero.setAttribute('id', 'forsideHero')
    forsideHero.src = `/assets/img/Hero.png`
    forsideSection.append(forsideHero)

    const forsideH2 = document.createElement('h2');
    forsideH2.setAttribute('id', 'forsideH2')
    forsideH2.innerText = `Fire tilfældige...`
    forsideSection.append(forsideH2)

    const forsideCardSection = document.createElement('section')
    forsideCardSection.setAttribute('id', 'forsideCardSection')
    forsideSection.append(forsideCardSection)

    const forsideCard = document.createElement('section')
    forsideCard.setAttribute('id', 'forsideCard')
    forsideCardSection.append(forsideCard)
}