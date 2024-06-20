import { useEffect, useReducer, useState } from 'react'
import './assets/dists/plateaux.css'
import { MainAdversaire } from '../../mainAdversaire'
import { Domino } from '../../domino'
import '../../assets/mainJoueur.css'
import { retouDebut, retourFin } from '../../fichierJs/fonction'
import { compterPoint } from '../../fichierJs/fonction'
import { triageEnOrdre } from '../../fichierJs/fonction'

export function Plateaux({ tableJoueur, idJoueur }) {
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
    const [resultatFetch, setResultat] = useState('teste')
    const [red, setRed] = useReducer(x => x + 1, 0)


    const recupTableDejeu = async () => {
        await fetch('http://127.0.0.1:8000' + localStorage.getItem('uriTable'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setResultat(res)
            })
    }
    /*
    const EnvoyerChangementTable = async () => {
        
        const modification = {
            "dominoPlace": dominoPlace,
            "partieLance": partieLancer,
            "tourDe": 1
        }
        await fetch('http://127.0.0.1:8000' + tableDeJeu['@id'], {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/merge-patch+json'
            },
            body: JSON.stringify(modification)
        }).then(res => res.json())
            .then()
    }*/
    useEffect(() => {
        recupTableDejeu()

        if (resultatFetch != 'teste') {
            console.log(resultatFetch.joueur)
        }
        setTimeout(() => {
            setRed()
            return clearTimeout()
        }, 10000);
    }, [red])
    const [passerTour, setPasserTour] = useState([false, false])
    const retirerDominoDeposer = (cle) => {
        var teste = resultatFetch.joueur[resultatFetch.tourDE].main
        for (let index = 0; index < teste.length; index++) {
            if (teste[index].cle == cle) {
                teste.splice(index, 1)
            }
        }
        resultatFetch.joueur[resultatFetch.tourDE].main = teste
    }
    const tourJoueur1Av = () => {
        if (teste != null) {
            let table = resultatFetch.dominoPlace
            let debuts = retouDebut(table)
            for (let index = 0; index < resultatFetch.joueur[resultatFetch.tourDE].main.length; index++) {
                if (resultatFetch.joueur[resultatFetch.tourDE].main[index].cle == teste) {
                    let dom = resultatFetch.joueur[index]
                    if (debuts != null) {
                        if (dom.v1 == debuts && dom.v1 != dom.v2) {
                            table.unshift(dom)
                            retirerDominoDeposer(teste)
                        }
                        if (dom.v2 == debuts && dom.v1 != dom.v2) {
                            let tmp = dom.v1
                            dom.v1 = dom.v2
                            dom.v2 = tmp
                            table.unshift(dom)
                            retirerDominoDeposer(teste)
                        }
                        if (dom.v1 == dom.v2 && dom.v1 == debuts) {
                            table.unshift(dom)
                            retirerDominoDeposer(teste)
                        }
                    }
                    if (debuts == null) {
                        table.unshift(dom)
                        retirerDominoDeposer(teste)
                    }
                    /*
                    setDominoPlace(table)
                    setLongDominoPlace(dominoPlace.length)
                    setTeste(0)
                    setDebut(table[0].v2)
                    setFin(table[table.length - 1].v1)*/
                }
            }
            passerTour[resultatFetch.tourDE] = false
        }
        if (teste == null || teste == 0) {
            passerTour[resultatFetch.tourDE] = true
            //handlerPartie()
        }
    }
    const poserDominoAv = () => {
        if (resultatFetch.joueur[resultatFetch.tourDE].id == resultatFetch.joueur[0].id || resultatFetch.joueur[resultatFetch.tourDE].id.joueur[1].id) {
            if (gagnant.avoirGagnant == false) {
                tourJoueur1Av()

                verificationSiPossibleGagnantmanche()
            }
        }
        //tourJoueur()
    }
    const tourJoueur1Ap = () => {
        if (teste != null) {
            let table = resultatFetch.dominoPlace
            //let fin = retourFin(dominoPlace)
            let fins = retourFin(table)
            for (let index = 0; index < resultatFetch.joueur[resultatFetch.tourDE].main.length; index++) {
                if (resultatFetch.joueur[resultatFetch.tourDE].main[index].cle == teste) {
                    let dom = resultatFetch.joueur[resultatFetch.tourDE].main[index]

                    if (fins != null) {
                        if (dom.v2 == fins && dom.v1 != dom.v2) {
                            table.push(dom)
                            retirerDominoDeposer(teste)
                        }
                        if (dom.v1 == fins && dom.v1 != dom.v2) {
                            let tmp = dom.v1
                            dom.v1 = dom.v2
                            dom.v2 = tmp
                            table.push(dom)
                            retirerDominoDeposer(teste)
                        }
                        if (dom.v1 == dom.v2 && dom.v1 == fins) {
                            table.push(dom)
                            retirerDominoDeposer(teste)
                        }
                    }
                    if (fins == null) {
                        table.push(dom)
                        retirerDominoDeposer(teste)
                    }
                    /*
                    setDominoPlace(table)
                    setLongDominoPlace(dominoPlace.length)
                    setTeste(0)
                    setDebut(table[0].v2)
                    setFin(table[table.length - 1].v1)*/
                    //console.log(table[table.length - 1].v1)
                }
            }
            passerTour.PasserJoueur1 = false
        }
        if (teste == null || teste == 0) {
            passerTour.PasserJoueur1 = true
        }
    }
    const [passeTous, setPasseTous] = useState(false)
    const verificationSiPasseTous = () => {
        if (resultatFetch.joueur.length == 2) {
            if (passerTour.PasserJoueur1 == true && passerTour.PasserJoueur2 == true) {
                setPasseTous(true)
            }
        }
    }
    const verificationSiPossibleGagnantmanche = () => {
        verificationSiPasseTous()
        if (passeTous == false) {
            if (resultatFetch.joueur.length == 2) {
                if (resultatFetch.joueur[0].main.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = resultatFetch.joueur[0].nomJoueur
                    let point = compterPoint(resultatFetch.joueur[1].main)
                    resultatFetch.joueur[0].point += point
                }
                if (resultatFetch.joueur[1].main.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = resultatFetch.joueur[1].nom
                    let point = compterPoint(resultatFetch.joueur[0].main)
                    resultatFetch.joueur[1].point.Joueur2 += point
                }
            }
        }
        if (passeTous == true) {
            if (resultatFetch.joueur.length == 2) {
                let point = [
                    { joueur: resultatFetch.joueur[0].nomJoueur, point: compterPoint(resultatFetch.joueur[0].main) },
                    { joueur: resultatFetch.joueur[1].nomJoueur, point: compterPoint(resultatFetch.joueur[1].main) },
                ]
                triageEnOrdre(point)
                attribuerPoint3a4(point)
            }
            
        }
    }
    const poserDominoAp = () => {
        if (resultatFetch.joueur[resultatFetch.tourDE].id == resultatFetch.joueur[0].id || resultatFetch.joueur[resultatFetch.tourDE].id.joueur[1].id) {
            if (gagnant.avoirGagnant == false) {
                tourJoueur1Ap()

                verificationSiPossibleGagnantmanche()
            }
        }
        //tourJoueur()
    }
    const [teste, setTeste] = useState('')
    const gagnant = {
        gagnant: 'teste',
        avoirGagnant : false
    }
    return <>

        <div className="tableDejeu">
            {!gagnant.avoirGagnant && <div className="avant" onClick={poserDominoAv}><i className='fas fa-arrow-left'></i></div>}

            {resultatFetch != 'teste' ? 
                resultatFetch.dominoPlace.map(Element => (<Domino
                    valeur1={Element.v1}
                    key={Element.cle}
                    valeur2={Element.v2}
                    cle={Element.cle}
                    onClick={setTeste}
                    emplacement={2}
                />))
             : 'rien'}
            {!gagnant.avoirGagnant && <div className="apres" onClick={poserDominoAp}> <i className='fas fa-arrow-right'></i> </div>}
        </div>
        <div className="emplacementMain">
            <div className="mainAdversaire">
                {resultatFetch != 'teste' ?
                    resultatFetch.joueur[1].id == idJoueur ?
                        <MainAdversaire
                            nombreJoueur={resultatFetch.joueur.length}
                            mainJ2={resultatFetch.joueur[0].main}
                            nomJ2={resultatFetch.joueur[0].nomJoueur}
                        /> :
                        <MainAdversaire
                            nombreJoueur={resultatFetch.joueur.length}
                            mainJ2={resultatFetch.joueur[1].main}
                            nomJ2={resultatFetch.joueur[1].nomJoueur}
                        />


                    : 'rien'}

            </div>

            <div className="boiteMainUser">
                {resultatFetch != 'teste' ?
                    resultatFetch.joueur[1].id == idJoueur ?
                        <div className='main'> {resultatFetch.joueur[1].main.map(Element => (<Domino
                            valeur1={Element.v1} key={Element.cle+'teste'} valeur2={Element.v2}
                    cle={Element.cle} onClick={setTeste} emplacement={1} />))}</div>
                        :
                        <div className='main'> {resultatFetch.joueur[0].main.map(Element => (<Domino
                            valeur1={Element.v1} key={Element.cle+'teste'} valeur2={Element.v2}
                            cle={Element.cle} onClick={setTeste} emplacement={1} />))}</div>


                    : 'rien'}
                
            </div>

        </div>
    </>
}