//fichier misy ny fonction tsotra fotsiny
//izany hoe fonction tsy mifandray @ variable de jeu fa manao traitement fotsiny
export const TrouverChoix = (choixPossible) => {
    let total = 0
    let choix = 0
    for (let index = 0; index < choixPossible.length; index++) {
        if (choixPossible[index].v1 + choixPossible[index].v2 > total) {
            total = choixPossible[index].v1 + choixPossible[index].v2
            choix = choixPossible[index]
        }
    }
    return choix
}

export const triageEnOrdre = (pointJoueur) => {
    for (let index = 0; index < pointJoueur.length; index++) {
        for (let index1 = 0; index1 < pointJoueur.length; index1++) {
            if (pointJoueur[index].point < pointJoueur[index1].point) {
                let tmp = pointJoueur[index]
                pointJoueur[index] = pointJoueur[index1]
                pointJoueur[index1] = tmp
            }
        }
    }
}

export function GenererNombreAleatoire(maximum, minimum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

export const distributionJoueur = (mainJ, domino) => {
    while (mainJ.length < 7) {
        let nombre = GenererNombreAleatoire(domino.length - 1, 0)
        mainJ.push(domino[nombre])
        domino.splice(nombre, 1)
    }
}
export const compterPoint = (mainjoueur) => {
    let point = 0
    for (let index = 0; index < mainjoueur.length; index++) {
        point += parseInt(mainjoueur[index].v1) + parseInt(mainjoueur[index].v2)
    }
    return point
}

export const retourFin = (table) => {
    if (table.length == 0) {
        return null
    } else {
        return table[table.length - 1].v1
    }
}
export const retouDebut = (table) => {
    if (table.length == 0) {
        return null
    } else {
        return table[0].v2
    }
}

export const placementDomino = () => {
    let dominoPlacer = document.getElementsByClassName('placer')
    if (dominoPlacer.length > 0) {
        let position = [
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [1, 7],
            [1, 8],
            [2, 8],
            [3, 8],
            [3, 7],
            [3, 6],
            [3, 5],
            [3, 4],
            [3, 3],
            [3, 2],
            [3, 1],
            [4, 1],
            [5, 1],
            [5, 2],
            [5, 3],
            [5, 4],
            [5, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [6, 8],
            [7, 8],
            [7, 7],
            [7, 6],
        ]
        for (let index = 0; index < dominoPlacer.length; index++) {
            dominoPlacer[index].style.gridRow = position[index][0]
            dominoPlacer[index].style.gridColumn = position[index][1]
        }
        for (let index = 0; index < dominoPlacer.length; index++) {
            if ((dominoPlacer[index].style.gridRow == '2' && dominoPlacer[index].style.gridColumn == '8') || (dominoPlacer[index].style.gridRow == '4' && dominoPlacer[index].style.gridColumn == '1')) {
                dominoPlacer[index].style.transform = "rotate(180deg)"
                dominoPlacer[index].style.left = "1.5rem"
            }
            else {
                dominoPlacer[index].style.transform = ""
                dominoPlacer[index].style.left = ""
                if (dominoPlacer[index].className.includes("mitsangana")) {
                    dominoPlacer[index].style.left = "1.5rem"
                }
            }
            if (dominoPlacer[index].style.gridRow == 3) {
                if (!dominoPlacer[index].className.includes("mitsangana")) {
                    dominoPlacer[index].style.transform = "rotate(-90deg)"
                }
            }
            if (dominoPlacer[index].style.gridRow == 4) {

                dominoPlacer[index].style.left = "-1.5rem"

            }

        }
    }
}
export const distribuerDivEmplacement = (avoirGagnat, dominoPlacer) => {
    let domino = document.getElementsByClassName("placer")
    let div1 = document.getElementById('div1')
    let div2 = document.getElementById('div2')
    let div3 = document.getElementById('div3')
    let div4 = document.getElementById('div4')  
    let div5 = document.getElementById('div5')  
    if (dominoPlacer.length>0) {
        div1.innerHTML = []
        div2.innerHTML = []
        div3.innerHTML = []
        div4.innerHTML = []
        div5.innerHTML = []
    }
    
    for (let index = 0; index < domino.length; index++) {
        if (index >= 0 && index < 12) {
            let className = 'domino '
            if (domino[index].className.includes('midaboka')) {
                className+= 'midaboka'
            }
            if (domino[index].className.includes('mitsangana')) {
                className += 'mitsangana'
            }
            div1.innerHTML += "<div class='domFin " + className + "'>" + domino[index].innerHTML +"</div>"
        }
        if (index >= 12 && index < 14) {
            let className = 'domino '
            if (domino[index].className.includes('midaboka')) {
                className += 'midaboka'
            }
            if (domino[index].className.includes('mitsangana')) {
                className += 'mitsangana'
            }
            div2.innerHTML += "<div class='domFin " + className + "'>" + domino[index].innerHTML +"</div>"
        }
        if (index >= 14 && index < 26) {
            let className = 'domino '
            if (domino[index].className.includes('midaboka')) {
                className += 'midaboka'
            }
            if (domino[index].className.includes('mitsangana')) {
                className += 'mitsangana'
            }
            div3.innerHTML += "<div class='domFin " + className + "'>" + domino[index].innerHTML +"</div>"
        }
        if (index >= 26 && index < 28) {
            let className = 'domino '
            if (domino[index].className.includes('midaboka')) {
                className += 'midaboka'
            }
            if (domino[index].className.includes('mitsangana')) {
                className += 'mitsangana'
            }
            div4.innerHTML += "<div class='domFin " + className + "'>" + domino[index].innerHTML +"</div>"
        }
        // if (index >= 23 && index < 27) {
        //     let className = 'domino '
        //     if (domino[index].className.includes('midaboka')) {
        //         className += 'midaboka'
        //     }
        //     if (domino[index].className.includes('mitsangana')) {
        //         className += 'mitsangana'
        //     }
        //     div5.innerHTML += "<div class='" + className + "'>" + domino[index].innerHTML +"</div>"
        // }
        
    }
    
    
}