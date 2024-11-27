export const buildForside = () =>{
    const main = document.getElementById('main')

    const forsideHero = document.createElement('img');
    forsideHero.setAttribute('id', 'forsideHero')
    forsideHero.src = `/assets/img/Hero.png`
    main.append(forsideHero)
}