export const myFetch = async (url, method = 'GET') => {
	try {
		const response = await fetch(url, {
			method
		})
		if(!response.ok) {
			throw new Error(`Fejl i myFetch: ${response.status} - ${response.statusText}`)
		}
		const data = await response.json()
		return data;
	} catch (error) {
		console.error(error)
	}
}

export const buildForside = () =>{
    const main = document.getElementById('main')

    const forsideSection = document.createElement('section')
    forsideSection.setAttribute('id', 'forsideSection')
    main.append(forsideSection)

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