export const buildOm = () =>{
    const main = document.getElementById('main')

    const omSection = document.createElement('section')
    omSection.setAttribute('id', 'omSection')
    app.append(omSection)

    const omHero = document.createElement('img');
    omHero.setAttribute('id', 'omHero')
    omHero.src = `/assets/img/Hero.png`
    omSection.append(omHero)

    const omH2 = document.createElement('h2');
    omH2.setAttribute('id', 'omH2')
    omH2.innerText = `Fire tilfældige...`
    omSection.append(omH2)

    const omCardSection = document.createElement('section')
    omCardSection.setAttribute('id', 'omCardSection')
    omSection.append(omCardSection)

    const omCard = document.createElement('section')
    omCard.setAttribute('id', 'omCard')
    omCardSection.append(omCard)
}