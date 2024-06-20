const Dominos = [
    { v1: "0", v2: "0", cle: "0" },
    { v1: "0", v2: "1", cle: "1" },
    { v1: "0", v2: "2", cle: "2" },
    { v1: "0", v2: "3", cle: "3" },
    { v1: "0", v2: "4", cle: "4" },
    { v1: "0", v2: "5", cle: "5" },
    { v1: "0", v2: "6", cle: "6" },
    { v1: "1", v2: "1", cle: "7" },
    { v1: "1", v2: "2", cle: "8" },
    { v1: "1", v2: "3", cle: "9" },
    { v1: "1", v2: "4", cle: "10" },
    { v1: "1", v2: "5", cle: "11" },
    { v1: "1", v2: "6", cle: "12" },
    { v1: "2", v2: "2", cle: "13" },
    { v1: "2", v2: "3", cle: "14" },
    { v1: "2", v2: "4", cle: "15" },
    { v1: "2", v2: "5", cle: "16" },
    { v1: "2", v2: "6", cle: "17" },
    { v1: "3", v2: "3", cle: "18" },
    { v1: "3", v2: "4", cle: "19" },
    { v1: "3", v2: "5", cle: "20" },
    { v1: "3", v2: "6", cle: "21" },
    { v1: "4", v2: "4", cle: "22" },
    { v1: "4", v2: "5", cle: "23" },
    { v1: "4", v2: "6", cle: "24" },
    { v1: "5", v2: "5", cle: "25" },
    { v1: "5", v2: "6", cle: "26" },
    { v1: "6", v2: "6", cle: "27" }
]
let mainJoueur = [
    { v1: '3', v2: '4', cle: '19' },
    { v1: '5', v2: '6', cle: '26' },
    { v1: '4', v2: '5', cle: '23' },
    { v1: '1', v2: '2', cle: '8' },
    { v1: '4', v2: '4', cle: '22' },
    { v1: '2', v2: '4', cle: '15' },
    { v1: '3', v2: '6', cle: '21' }
]
let mainAdversaire = [
    { v1: '0', v2: '5', cle: '5' },
    { v1: '0', v2: '0', cle: '0' },
    { v1: '0', v2: '2', cle: '2' },
    { v1: '4', v2: '6', cle: '24' },
    { v1: '0', v2: '1', cle: '1' },
    { v1: '1', v2: '1', cle: '7' },
    { v1: "6", v2: "6", cle: "27" }
]
let dominoPlace = [
    { v1: "0", v2: "2", cle: "2" },{ v1: "2", v2: "6", cle: "17" }
]
//console.log("main joueur 1 ", mainJoueur)


/**
 * Fonction mi verifier hoe inona daoly ny domino eny @ tanan'ilay joueur automatique 
 * ny tadiavina dia ilay hoe firy daoly ny vato any aminy
 * zany hoe hisaina daloy ny domy
 * raha ohatra ka manana 0 izy de hisaina daoly ny 0 
 * de verifiena otranzay daoly jusqu'à 6
 */
const verificationDesDominoEnMain = (mainIA) => {
    let nbrdomino = {
        "n0": 0, "n1": 0, "n2": 0, "n3": 0, "n4": 0, "n5": 0, "n6": 0
    }
    for (let index = 0; index < mainIA.length; index++) {
        if (mainIA[index].v1 == 0 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n0 += 1;
        }
        if (mainIA[index].v1 == 1 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n1 += 1;
        }
        if (mainIA[index].v1 == 2 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n2 += 1;
        }
        if (mainIA[index].v1 == 3 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n3 += 1;
        }
        if (mainIA[index].v1 == 4 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n4 += 1;
        }
        if (mainIA[index].v1 == 5 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n5 += 1;
        }
        if (mainIA[index].v1 == 6 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n6 += 1;
        }
    }
    for (let index = 0; index < mainIA.length; index++) {
        if (mainIA[index].v2 == 0 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n0 += 1;
        }
        if (mainIA[index].v2 == 1 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n1 += 1;
        }
        if (mainIA[index].v2 == 2 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n2 += 1;
        }
        if (mainIA[index].v2 == 3 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n3 += 1;
        }
        if (mainIA[index].v2 == 4 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n4 += 1;
        }
        if (mainIA[index].v2 == 5 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n5 += 1;
        }
        if (mainIA[index].v2 == 6 && mainIA[index].v1 != mainIA[index].v2) {
            nbrdomino.n6 += 1;
        }
    }
    for (let index = 0; index < mainIA.length; index++) {
        if (mainIA[index].v2 == 0 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n0 += 1;
        }
        if (mainIA[index].v2 == 1 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n1 += 1;
        }
        if (mainIA[index].v2 == 2 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n2 += 1;
        }
        if (mainIA[index].v2 == 3 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n3 += 1;
        }
        if (mainIA[index].v2 == 4 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n4 += 1;
        }
        if (mainIA[index].v2 == 5 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n5 += 1;
        }
        if (mainIA[index].v2 == 6 && mainIA[index].v1 == mainIA[index].v2) {
            nbrdomino.n6 += 1;
        }
    }
    return nbrdomino
}
/**
 * fonction manao recherche ny domino restant any am joueur hafa na ny domino tsy miasa par rapport @ domino efa placé sy ny eny @ tanany
 * @param {*} dominoplacee 
 * @param {*} dominoTotal 
 * @param {*} mainIA 
 */
const verificationDominoRestant = (dominoplacee, dominoTotal, mainIA) => {
    let domino = []
    for (let index = 0; index < dominoTotal.length; index++) {
        domino.push(dominoTotal[index])
    }
    if (dominoplacee.length == 0) {
        for (let index = 0; index < mainIA.length; index++) {
            for (let index1 = 0; index1 < domino.length; index1++) {
                if (mainIA[index].cle == domino[index1].cle) {
                    domino.splice(index1, 1)
                }
            }
        }
        return domino
    } else {
        for (let index = 0; index < dominoplacee.length; index++) {
            for (let index1 = 0; index1 < domino.length; index1++) {
                if (dominoplacee[index].cle == domino[index1].cle) {
                    domino.splice(index1, 1)
                }
            }
        }
        for (let index = 0; index < mainIA.length; index++) {
            for (let index1 = 0; index1 < domino.length; index1++) {
                if (mainIA[index].cle == domino[index1].cle) {
                    domino.splice(index1, 1)
                }
            }
        }
        return domino
    }
}
/**
 * ito fonction manao recherche an'ilay nombre an'ilay valeur domino restant @ table sy joueur a partir an'ilay nombre de domino an'ilay IA automatique tetsy ambony
 * @param {Array} nbrDomIA 
 */
const verificationDesNombreDeDominoRestant = (nbrDomIA) => {
    //console.log(' \nverification des nombre de domino restant \n ')
    let nombreDominoDepart = {
        "n0": 7, "n1": 7, "n2": 7, "n3": 7, "n4": 7, "n5": 7, "n6": 7
    }
    return {
        "n0": nombreDominoDepart.n0 - nbrDomIA.n0,
        "n1": nombreDominoDepart.n1 - nbrDomIA.n1,
        "n2": nombreDominoDepart.n2 - nbrDomIA.n2,
        "n3": nombreDominoDepart.n3 - nbrDomIA.n3,
        "n4": nombreDominoDepart.n4 - nbrDomIA.n4,
        "n5": nombreDominoDepart.n5 - nbrDomIA.n5,
        "n6": nombreDominoDepart.n6 - nbrDomIA.n6
    }
}
/**
 * fonction midetermine ny domino hoe afaka apetraka mba ahafahana manangana ny chaine possible rehetra 
 * @param {*} mainIA 
 * @param {*} debut 
 * @param {*} fin 
 * @returns 
 */
const determinerDominoPossible = (domino, debut, fin) => {
    if (domino.v1 == debut || domino.v2 == debut) {
        return { 'posable': true, 'position': 'debut' }
    }
    if (domino.v2 == fin || domino.v1 == fin) {
        return { 'posable': true, 'position': 'fin' }
    }
    if (domino.v2 == domino.v1 == debut == fin) {
        return { 'posable': true, 'position': 'debut' }
    }
    else {
        return { 'posable': false, 'position': null }
    }
}

const determinerParSomme = (dominoPossible) => {
    let choix = dominoPossible[0]
    const somme = (domino) => {
        return domino.v1 + domino.v2
    }
    for (let index = 0; index < dominoPossible.length; index++) {
        if (somme(choix) < somme(dominoPossible[index])) {
            choix = dominoPossible[index]
        }
    }
    return choix
}
const determinerChoixAPartirPossibilite = (possibilite, main) => {
    let domino = []
    for (let index = 0; index < main.length; index++) {
        if (main[index].v1 == possibilite.valeur || main[index].v2 == possibilite.valeur) {
            domino.push(main[index])
        }
    }
    return determinerParSomme(domino)
}
/**
 * fonction mi-retirer domino avy ao @ main
 * @param {*} main 
 * @param {*} domino 
 */
const retirerDomino = (main, domino) => {
    for (let index = 0; index < main.length; index++) {
        if (domino.cle == main[index].cle) {
            main.splice(index, 1)
        }
    }
}
/**
 * fonction mi-poser domino ao @ chaine possible 
 * @param {*} domino 
 * @param {*} dominoPlace 
 * @param {*} main 
 */
const poserDomino = (domino, dominoPlace, main) => {
    let debut = dominoPlace[0].v1
    let fin = dominoPlace[dominoPlace.length - 1].v2
    let poser = false
    if (domino.v2 == debut && poser == false) {
        dominoPlace.unshift(domino)
        retirerDomino(main, domino)
        poser = true
    }
    if (domino.v1 == debut && poser == false) {
        let tmp = domino.v1
        domino.v1 = domino.v2
        domino.v2 = tmp
        dominoPlace.unshift(domino)
        retirerDomino(main, domino)
        poser = true
    }
    if (domino.v1 == fin && poser == false) {
        dominoPlace.push(domino)
        retirerDomino(main, domino)
        poser = true
    }
    if (domino.v2 == fin && poser == false) {
        let tmp = domino.v1
        domino.v1 = domino.v2
        domino.v2 = tmp
        dominoPlace.push(domino)
        retirerDomino(main, domino)
        poser = true
    }
    if (domino.v2 == domino.v1 == fin && poser == false) {
        dominoPlace.push(domino)
        retirerDomino(main, domino)
        poser = true
    }
    if (domino.v2 == domino.v1 == debut && poser == false) {
        dominoPlace.unshift(domino)
        retirerDomino(main, domino)
        poser = true
    }
}
const choisirDominoConstructionChaine = (main, debut, fin) => {
    for (let index = 0; index < main.length; index++) {
        if (determinerDominoPossible(main[index], debut, fin).posable == true) {
            return main[index]
        }
    }
    return null
}
/**
 * fonction manao construction chaine
 * @param {*} domino 
 * @param {*} mainIA 
 * @param {*} longPossible 
 * @param {*} dominoP 
 * @param {*} dominoRestant 
 * @param {*} nombreJoueur 
 */
const constructionChaine = (domino, mainIA, longPossible, dominoP, dominoRestant, nombreJoueur) => {
    let chainePossible = []
    let main = []
    let restant = []
    for (let index = 0; index < dominoRestant.length; index++) {
        restant.push(dominoRestant[index])
    }
    for (let index = 0; index < mainIA.length; index++) {
        main.push(mainIA[index])
    }
    for (let index = 0; index < dominoP.length; index++) {
        chainePossible.push(dominoP[index])
    }
    let tour = 0
    let indexChaine = 0
    /**
     * fonction manao changement an'ny tour en fonciton an'ny nombre de joueur
     * @param {*} tour 
     * @param {*} nombreJoueur 
     */
    const testetour = () => {
        if (tour < nombreJoueur) {
            tour++
        }
        if (tour == nombreJoueur - 1) {
            tour = 0
        }
    }
    poserDomino(domino, chainePossible, main)
    while (indexChaine < longPossible && main.length > 0) {
        let poser = false
        if (tour == 0 && poser == false) {
            let domino = choisirDominoConstructionChaine(main, chainePossible[0].v1, chainePossible[chainePossible.length - 1].v2)
            if (domino == null) {
                //null
            } else {
                poserDomino(domino, chainePossible, main)
            }
            testetour()
            poser = true
        }
        if (tour > 0 && poser == false) {
            let domino = choisirDominoConstructionChaine(restant, chainePossible[0].v1, chainePossible[chainePossible.length - 1].v2)
            if (domino == null) {
                //null
            } else {
                poserDomino(domino, chainePossible, restant)
            }
            testetour(tour, nombreJoueur)
            poser = true
        }
        indexChaine += 1;
    }
    return {
        "domino": domino,
        "chaine": chainePossible,
        "longMain": main.length,
        'longChaine' : chainePossible.length
    }
}
/**
 * fonction mi-determine chaine possible rehetra
 * @param {*} dominoRestant 
 * @param {*} dominoP 
 * @param {*} mainIA 
 */
const determinerChainepossible = (dominoRestant, dominoP, mainIA, nombreJoueur) => {
    let domino = []
    let chainePossible = []
    for (let index = 0; index < dominoRestant.length; index++) {
        domino.push(dominoRestant[index])
    }
    if (dominoP.length > 0) {
        let debut = dominoP[0].v2
        let fin = dominoP[dominoP.length - 1].v1
        
        let longChaineMax = nombreJoueur * 7
        if (longChaineMax > dominoP.length) {
            for (let index = 0; index < mainIA.length; index++) {
                let possible = determinerDominoPossible(mainIA[index], debut, fin)
                if (possible.posable == true) {
                    let chaine = constructionChaine(mainIA[index], mainIA, longChaineMax - dominoP.length, dominoP, dominoRestant, nombreJoueur)
                    chainePossible.push(chaine)
                }
            }
        }
    }
    
    return chainePossible
}
/**
 * fonction manao choix de domino a partir an'ireo chaine possible
 * @param {*} chainePossible 
 * @returns 
 */
const choisirDominoParmiChaine = (chainePossible) => {
   if (chainePossible.length>0) {
    let choix = chainePossible[0]
    for (let index = 0; index < chainePossible.length; index++) {
        if (chainePossible[index].longMain < choix.longMain) {
            choix = chainePossible[index]
        }
        if (chainePossible[index].longMain == choix.longMain) {
            if (chainePossible[index].longChaine < choix.longChaine) {
                choix = chainePossible[index]
            }
        }
    }
    return choix.domino
   }
}



/**
 * 
 * @param {*} mainIA //main an'ilay IA
 * @param {*} dominoPlacer // ny domino efa place eo @ table
 * 
 * fonction manao recherche ny domino tokony apetraka
 */
export const RechercheDomino = (mainIA, dominoPlacer, nombreJoueur) => {
    console.log('debut dom ', dominoPlacer[0].v2)
    console.log('fin dom ', dominoPlacer[dominoPlacer.length - 1].v1)
    let dominoRestant = verificationDominoRestant(dominoPlacer, Dominos, mainIA)
    let chainePossible = determinerChainepossible(dominoRestant, dominoPlacer, mainIA, nombreJoueur)
    console.log('chaine possible ', chainePossible)
    let choixDomino = choisirDominoParmiChaine(chainePossible)
    return choixDomino
}
//console.log('domino ', RechercheDomino(mainAdversaire, dominoPlace, 3))

