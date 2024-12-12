export const buildNav = () =>{
    const main = document.getElementById('main')

    const arrItems = [
        { title: "FORSIDE", ID: "forsideText"},
		{ title: "PLAKATER", ID: "forsidePlakater"},
		{ title: "OM OS", ID: "forsideOm"},
		{ title: "KONTAKT OS", ID: "forsideKontakt"},
        { title: "LOGIN", ID: "forsideLogin"},
    ]

    const navSection = document.createElement('section');
    navSection.setAttribute('id', 'navSection')

    const navLogo = document.createElement('p');
    navLogo.setAttribute('id', 'navLogo')
    navLogo.innerText = `WALLYWOOD`
    navSection.append(navLogo)

    const textSection = document.createElement('section');
    textSection.setAttribute('id', 'textSection')
     
    for(let item of arrItems) {
        const navText = document.createElement('p')
        navText.innerText = `${item.title}`
        navText.setAttribute('id', `${item.ID}`)
        navText.setAttribute('class', `navText`)
        
        navSection.append(textSection)
        textSection.append(navText)
    }

    const navBasket = document.createElement('img');
    navBasket.setAttribute('id', 'navBasket')
    navBasket.src = `/assets/img/Basket.png`
    navSection.append(navBasket)


    main.append(navSection)
}


