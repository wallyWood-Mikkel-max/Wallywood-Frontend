export const buildNav = () =>{
    const main = document.getElementById('main')

    const arrItems = [
        "FORSIDE",
        "PLAKATER",
        "OM OS",
        "KONTAKT OS",
        "LOGIN"
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
        navText.innerText = `${item}`
        navText.setAttribute('id', 'navText')
        
        navSection.append(textSection)
        textSection.append(navText)
    }

    const navBasket = document.createElement('img');
    navBasket.setAttribute('id', 'navBasket')
    navBasket.src = `/assets/img/Basket.png`
    navSection.append(navBasket)


    main.append(navSection)
}


