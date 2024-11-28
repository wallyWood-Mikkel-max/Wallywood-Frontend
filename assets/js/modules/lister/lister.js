export const buildListe = () =>{
    const main = document.getElementById('main')

    const listeSection = document.createElement('section')
    listeSection.setAttribute('id', 'listeSection')
    main.append(listeSection)

    const listeHero = document.createElement('img');
    listeHero.setAttribute('id', 'listeHero')
    listeHero.src = `/assets/img/Hero.png`
    listeSection.append(listeHero)

    const listeH2 = document.createElement('h2');
    listeH2.setAttribute('id', 'listeH2')
    listeH2.innerText = `Fire tilfældige...`
    listeSection.append(listeH2)

    const listeCardSection = document.createElement('section')
    listeCardSection.setAttribute('id', 'listeCardSection')
    listeSection.append(listeCardSection)

    const listeCard = document.createElement('section')
    listeCard.setAttribute('id', 'listeCard')
    listeCardSection.append(listeCard)
}