/*mql = window.matchMedia(mediaQueryString)
mql viene de media query list, que es el objeto que se crea con el método matchMedia()
mediaQueryString es cualquier media query válida en CSS
*/

const title = document.getElementById('title')

const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

const applyMatchMedia = mql => {
mql.matches ?
    //NO HACER ESTO NUNCA :)
    //NO HACER ESTO NUNCA
    document.body.style.backgroundColor = 'red'
    //ESTO SI
    // title.classList.add('clase que sea')
    :
    //NO HACER ESTO NUNCA :)
    //NO HACER ESTO NUNCA
    document.body.style.backgroundColor = 'royalblue'
}

mql = matchMedia('(min-width:800px)')

addEventListener('resize', (e) => {
    // if (innerWidth == '800') console.log(innerWidth)
    applyMatchMedia(mql)
})
addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))