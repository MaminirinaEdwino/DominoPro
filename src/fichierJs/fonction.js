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