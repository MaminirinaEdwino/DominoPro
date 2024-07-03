/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useReducer, useState } from 'react'
import './assets/App.css'
import { Domino } from './domino'
import './assets/mainJoueur.css'
import { TrouverChoix, distribuerDivEmplacement, placementDomino } from './fichierJs/fonction'
import { triageEnOrdre } from './fichierJs/fonction'
import { distributionJoueur } from './fichierJs/fonction'
import { retourFin, retouDebut } from './fichierJs/fonction'
import { NomJoueur } from './nomJoueur'
import { MainAdversaire } from './mainAdversaire'
import { Menu } from './menu'
import { Footer } from './footer'
import { Point } from './point'
import { compterPoint } from './fichierJs/fonction'
import { Spinner } from './spinner'
import { RechercheDomino } from './fichierJs/algo'
import { Chargement } from './chargement'
import Apres from './addApres'

function Plateau() {
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
    const mainVideJ1 = [
        { v1: "0", v2: "0", cle: "0" },
        { v1: "0", v2: "1", cle: "1" },
        { v1: "0", v2: "2", cle: "2" },
        { v1: "0", v2: "3", cle: "3" },
        { v1: "0", v2: "4", cle: "4" },
        { v1: "0", v2: "5", cle: "5" },
        { v1: "0", v2: "6", cle: "6" }
    ]
    const [nomJoueur1, setNomJoueur1] = useState('joueur 1')
    const [nomJoueur2, setNomJoueur2] = useState('joueur 2')
    const [nomJoueur3, setNomJoueur3] = useState('joueur 3')
    const [nomJoueur4, setNomJoueur4] = useState('joueur 4')
    const Joueur1 = useMemo(() => {
        return { nom: nomJoueur1, id: 0 }
    }, [nomJoueur1])
    const Joueur2 = useMemo(() => {
        return { nom: nomJoueur2, id: 1 }
    }, [nomJoueur2])
    const Joueur3 = useMemo(() => {
        return { nom: nomJoueur3, id: 2 }
    }, [nomJoueur3])
    const Joueur4 = useMemo(() => {
        return { nom: nomJoueur4, id: 3 }
    }, [nomJoueur4])
    useEffect(() => {
        Joueur1.nom = nomJoueur1;
        Joueur2.nom = nomJoueur2;
        Joueur3.nom = nomJoueur3;
        Joueur4.nom = nomJoueur4;
        console.log(Joueur1.nom)
    }, [nomJoueur1, nomJoueur2, nomJoueur3, nomJoueur4, Joueur1, Joueur2, Joueur3, Joueur4])

    const cleDouble = [
        27, 25, 22, 13, 7, 0
    ]

    //initialisation du joueur rehetra 
    const [mainJoueur1, setMainJoueur1] = useState([])
    const [main1, setMain1] = useState(mainJoueur1.length)

    const [mainJoueur2, setMainJoueur2] = useState([])
    //const [main2, setMain2] = useState(mainJoueur2.length)

    const [mainJoueur3, setMainJoueur3] = useState([])
    //const [main3, setMain3] = useState(mainJoueur3.length)

    const [mainJoueur4, setMainJoueur4] = useState([])
    //const [main4, setMain4] = useState(mainJoueur4.length)

    //point joueur , objet mandray ny point des joueur tsirairay ihany ito
    const [pointJoueur, setPointJoueur] = useState({
        Joueur1: 0,
        Joueur2: 0,
        Joueur3: 0,
        Joueur4: 0
    })



    // domino place : tableau misy ny domino sur table rehetra 
    const [dominoPlace, setDominoPlace] = useState([])
    //longDomino Place : variable mandray ny ny longueur an'ilay dominoPlace
    const [longDominoPlace, setLongDominoPlace] = useState(dominoPlace.length)
    // ny debut sy fin : valeur an'ilay domino @ debut sy fin an'ilay chaine de domino sur table
    const [debut, setDebut] = useState(null)
    const [fin, setFin] = useState(null)

    //dominoDistribution : Domino ampiasaina rehefa manao distribution domino 
    //mba tsy hikitihina an'ilay liste originale 
    const [dominoDistribution, setDominoDistribution] = useState(Dominos)

    //NombreJoueur : misy ny nombre joueur anaty partie iray
    const [nombreJoueur, setNombreJoueur] = useState(0)

    //teste : mandray ny cle an'ilay domino izay ho -apetraky ny joueur 
    // mandray valeur izy rehefa miclique ilay domino ho apetraka le 
    //joueur de rehefa avy napetraka le domino de miala eny @ tanana
    const [teste, setTeste] = useState('')

    // passerTour objet mandray valeur booleen izy hahafahana miverifier hoe
    //nipasse tour ve le joueur sa nametraka vato 
    const [passerTour, setPasserTour] = useState({
        PasserJoueur1: false,
        PasserJoueur2: false,
        PasserJoueur3: false,
        PasserJoueur4: false
    })

    /**
     * ny gagnant dia variable ahafahana mandray ny nom du 
     * gagnant de la manche raha toa ka ilaina le izy 
     * izany hoe mbola tsy ilay gagnant de la partie io fa mbola 
     * manche iray ihany alo
     */
    const [gagnant, setGagnant] = useState({
        avoirGagnant: false, gagnant: 'teste'
    })
    const [tour, setTour] = useState(0)
    const [tourDeJoueur, setTourDejoueur] = useState(0)
    const [difficulte, setDifficulte] = useState('normale')

    const difficulteHandler = (e) => {
        console.log(e.target.value)
        setDifficulte(e.target.value)

    }

    /**
     * ny passe tous dia variable mandray ny etat raha toa ka samy tsy misy afaka mandeha 
     * intsony ireo joueur 
     */
    const [passeTous, setPasseTous] = useState(false)
    const [LancerPArtie, setLancerPartie] = useState(false)
    const handlerPartie = () => {
        if (LancerPArtie == false) {
            setLancerPartie(true)
        } else {
            setLancerPartie(false)
        }
    }
    /**
     * ny verification si passe tous no ahafahana miteste hoe mbola misy mande ireo joueur sa efa samy 
     * tsisy afaka mandeha instony
     */
    const verificationSiPasseTous = () => {
        if (nombreJoueur == 2) {
            if (passerTour.PasserJoueur1 == true && passerTour.PasserJoueur2 == true) {
                setPasseTous(true)
            }
        }
        if (nombreJoueur == 3) {
            if (passerTour.PasserJoueur1 == true && passerTour.PasserJoueur2 == true && passerTour.PasserJoueur3 == true) {
                setPasseTous(true)
            }
        }
        if (nombreJoueur == 4) {
            if (passerTour.PasserJoueur1 == true
                && passerTour.PasserJoueur2 == true
                && passerTour.PasserJoueur3 == true
                && passerTour.PasserJoueur4 == true) {
                setPasseTous(true)
            }
        }
    }
    /**
     * ny compterPoint dia fonction miretourne ny valeur total ny domino restant an'ny joueur 
     */

    // ito efa mazava be fa manao triage ny asany 
    // fa le izy triage en ordre croissant an'ny domino an'ny joueur rehetra rehefa taraiky 

    /**
     * 
     * @param {*} point 
     * ito fonction ito indray no manao attribution des points ho an'izay mandresy
     * mbola tokony asina ilay teste manao hoe raha latsaka ny cinq de tsy mitoko le joueur fa za mo mbola kamo de zappeko alo 
     */
    const attribuerPoint3a4 = (point) => {
        if (point[0].joueur == Joueur1.nom) {
            for (let index = 1; index < point.length; index++) {
                pointJoueur.Joueur1 += point[index].point / nombreJoueur
                point[index].point = 0
            }
            gagnant.avoirGagnant = true
            gagnant.gagnant = Joueur1.nom
            console.log('teste')
        }
        if (point[0].joueur == Joueur2.nom) {
            for (let index = 1; index < point.length; index++) {
                pointJoueur.Joueur2 += point[index].point / nombreJoueur
                point[index].point = 0
            }
            gagnant.avoirGagnant = true
            gagnant.gagnant = Joueur2.nom
        }
        if (point[0].joueur == Joueur3.nom) {
            for (let index = 1; index < point.length; index++) {
                pointJoueur.Joueur3 += point[index].point / nombreJoueur
                point[index].point = 0
            }
            gagnant.avoirGagnant = true
            gagnant.gagnant = Joueur3.nom
        }
        if (point[0].joueur == Joueur4.nom) {
            for (let index = 1; index < point.length; index++) {
                pointJoueur.Joueur4 += point[index].point / nombreJoueur
                point[index].point = 0
            }
            gagnant.avoirGagnant = true
            gagnant.gagnant = Joueur4.nom
        }

    }
    /**
     * ito fonciton no miandraikitra ny verification hoe sao de efa tokony ho tapitra le manche 
     * ato no miteste ny point an'ny joueur sy ny isan'ny vatony
     */
    const verificationSiPossibleGagnantmanche = () => {
        verificationSiPasseTous()
        if (passeTous == false) {
            if (nombreJoueur == 2) {
                if (mainJoueur1.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur1.nom
                    let point = compterPoint(mainJoueur2)
                    pointJoueur.Joueur1 += point / nombreJoueur
                }
                if (mainJoueur2.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur2.nom
                    let point = compterPoint(mainJoueur1)
                    pointJoueur.Joueur2 += point / nombreJoueur
                }
            }
            if (nombreJoueur == 3) {
                if (mainJoueur1.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur1.nom
                    let point = compterPoint(mainJoueur2) + compterPoint(mainJoueur3)
                    pointJoueur.Joueur1 += point / nombreJoueur
                }
                if (mainJoueur2.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur2.nom
                    let point = compterPoint(mainJoueur1) + compterPoint(mainJoueur3)
                    pointJoueur.Joueur2 += point / nombreJoueur
                }
                if (mainJoueur3.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur3.nom
                    let point = compterPoint(mainJoueur1) + compterPoint(mainJoueur2)
                    pointJoueur.Joueur3 += point / nombreJoueur
                }
            }
            if (nombreJoueur == 4) {
                if (mainJoueur1.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur1.nom
                    let point = compterPoint(mainJoueur2) + compterPoint(mainJoueur3) + compterPoint(mainJoueur4)
                    pointJoueur.Joueur1 += point / nombreJoueur
                }
                if (mainJoueur2.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur2.nom
                    let point = compterPoint(mainJoueur1) + compterPoint(mainJoueur3) + compterPoint(mainJoueur4)
                    pointJoueur.Joueur2 += point / nombreJoueur
                }
                if (mainJoueur3.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur3.nom
                    let point = compterPoint(mainJoueur2) + compterPoint(mainJoueur1) + compterPoint(mainJoueur4)
                    pointJoueur.Joueur3 += point / nombreJoueur
                }
                if (mainJoueur4.length == 0) {
                    gagnant.avoirGagnant = true
                    gagnant.gagnant = Joueur4.nom
                    let point = compterPoint(mainJoueur2) + compterPoint(mainJoueur3) + compterPoint(mainJoueur1)
                    pointJoueur.Joueur4 += point / nombreJoueur
                }
            }
        }
        if (passeTous == true) {
            if (nombreJoueur == 2) {
                let point = [
                    { joueur: Joueur1.nom, point: compterPoint(mainJoueur1) },
                    { joueur: Joueur2.nom, point: compterPoint(mainJoueur2) },
                ]
                triageEnOrdre(point)
                attribuerPoint3a4(point)
            }
            if (nombreJoueur == 3) {
                let point = [
                    { joueur: Joueur1.nom, point: compterPoint(mainJoueur1) },
                    { joueur: Joueur2.nom, point: compterPoint(mainJoueur2) },
                    { joueur: Joueur3.nom, point: compterPoint(mainJoueur3) },
                ]
                triageEnOrdre(point)
                attribuerPoint3a4(point)

            }
            if (nombreJoueur == 4) {
                let point = [
                    { joueur: Joueur1.nom, point: compterPoint(mainJoueur1) },
                    { joueur: Joueur2.nom, point: compterPoint(mainJoueur2) },
                    { joueur: Joueur3.nom, point: compterPoint(mainJoueur3) },
                    { joueur: Joueur4.nom, point: compterPoint(mainJoueur4) },
                ]
                triageEnOrdre(point)
                attribuerPoint3a4(point)

            }
        }
    }
    const setJoueur = (e) => {
        setNombreJoueur(e.target.value)
        setTeteDeListe(null)
    }
    // ny distribution joueur ity no midistribuer ny domino eny @ main

    const touriste = () => {
        if (nombreJoueur == 2) {
            if (tour == 0) {
                setTour((tour) => (tour + 1))
            }
            if (tour == 1) {
                setTour(0)
            }
        }
        if (nombreJoueur == 3) {
            if (tour == 0) {
                setTour((tour) => (tour + 1))
            }
            if (tour == 1) {
                setTour(2)
            }
            if (tour == 2) {
                setTour(0)
            }
        }
        if (nombreJoueur == 4) {
            if (tour == 0) {
                setTour((tour) => (tour + 1))
            }
            if (tour == 1) {
                setTour(2)
            }
            if (tour == 2) {
                setTour(3)
            }
            if (tour == 3) {
                setTour(0)
            }
        }
    }
    const [gagnantPartie, setGagnantPartie] = useState('')
    const [finPartie, setFinPartie] = useState(false)
    const verificationGagnantFinale = () => {
        if (nombreJoueur == 2) {
            if (pointJoueur.Joueur1 > 60 && pointJoueur.Joueur2 == 0) {
                setGagnantPartie(Joueur1.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur1 > 120 && pointJoueur.Joueur2 > 0) {
                setGagnantPartie(Joueur1.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur2 > 60 && pointJoueur.Joueur1 == 0) {
                setGagnantPartie(Joueur2.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur2 > 120 && pointJoueur.Joueur1 > 0) {
                setGagnantPartie(Joueur2.nom);
                setFinPartie(true);
            }
        }
        if (nombreJoueur == 3) {
            if (pointJoueur.Joueur1 > 60 && pointJoueur.Joueur2 == 0 && pointJoueur.Joueur3 == 0) {
                setGagnantPartie(Joueur1.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur1 > 120 && pointJoueur.Joueur2 > 0 && pointJoueur.Joueur3 > 0) {
                setGagnantPartie(Joueur1.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur2 > 60 && pointJoueur.Joueur1 == 0 && pointJoueur.Joueur3 == 0) {
                setGagnantPartie(Joueur2.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur2 > 120 && pointJoueur.Joueur1 > 0 && pointJoueur.Joueur3 > 0) {
                setGagnantPartie(Joueur2.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur3 > 60 && pointJoueur.Joueur2 == 0 && pointJoueur.Joueur3 == 0) {
                setGagnantPartie(Joueur3.nom);
                setFinPartie(true)
            }
            if (pointJoueur.Joueur3 > 120 && pointJoueur.Joueur2 > 0 && pointJoueur.Joueur3 > 0) {
                setGagnantPartie(Joueur3.nom);
                setFinPartie(true);
            }
        }
        if (nombreJoueur == 4) {
            if (pointJoueur.Joueur1 > 60 && pointJoueur.Joueur2 == 0 && pointJoueur.Joueur3 == 0 && pointJoueur.Joueur4 == 0) {
                setGagnantPartie(Joueur1.nom);
                setFinPartie(true)
            }
            if (pointJoueur.Joueur1 > 120 && pointJoueur.Joueur2 > 0 && pointJoueur.Joueur3 > 0 && pointJoueur.Joueur4 > 0) {
                setGagnantPartie(Joueur1.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur2 > 60 && pointJoueur.Joueur1 == 0 && pointJoueur.Joueur3 == 0 && pointJoueur.Joueur4 == 0) {
                setGagnantPartie(Joueur2.nom);
                setFinPartie(true)
            }
            if (pointJoueur.Joueur2 > 120 && pointJoueur.Joueur1 > 0 && pointJoueur.Joueur3 > 0 && pointJoueur.Joueur4 > 0) {
                setGagnantPartie(Joueur2.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur3 > 60 && pointJoueur.Joueur1 == 0 && pointJoueur.Joueur2 == 0 && pointJoueur.Joueur4 == 0) {
                setGagnantPartie(Joueur3.nom);
                setFinPartie(true)
            }
            if (pointJoueur.Joueur3 > 120 && pointJoueur.Joueur1 > 0 && pointJoueur.Joueur2 > 0 && pointJoueur.Joueur4 > 0) {
                setGagnantPartie(Joueur3.nom);
                setFinPartie(true);
            }
            if (pointJoueur.Joueur4 > 60 && pointJoueur.Joueur1 == 0 && pointJoueur.Joueur2 == 0 && pointJoueur.Joueur3 == 0) {
                setGagnantPartie(Joueur4.nom);
                setFinPartie(true)
            }
            if (pointJoueur.Joueur4 > 120 && pointJoueur.Joueur1 > 0 && pointJoueur.Joueur2 > 0 && pointJoueur.Joueur3 > 0) {
                setGagnantPartie(Joueur4.nom);
                setFinPartie(true);
            }
        }
    }

    useEffect(() => {
        //console.log('teste')
        //console.log(passerTour)
        console.log("tour", tour)
        console.log("liste Joueur", listeJoueur[tour])
        placementDomino()
        distribuerDivEmplacement(gagnant.avoirGagnant, dominoPlace)
        ajouterClickFin()
        if (nombreJoueur == 2 && lancer == true) {
            if (tour == Joueur2.id) {
                setTimeout(() => {
                    //console.log('teste')
                    tourJoueur2()
                    touriste()
                    verificationSiPossibleGagnantmanche()
                }, 2000);

            }
            console.log(mainJoueur1)
            console.log(mainJoueur2)
            verificationGagnantFinale()
        }
        if (nombreJoueur == 3 && lancer == true) {
            if (tour == Joueur2.id && lancer == true) {
                setTimeout(() => {
                    tourJoueur2()
                    touriste()
                    verificationSiPossibleGagnantmanche()
                }, 2000);

            }
            if (tour == Joueur3.id && lancer == true) {
                setTimeout(() => {
                    tourJoueur3()
                    touriste()
                    verificationSiPossibleGagnantmanche()
                }, 2000);

            }
            verificationGagnantFinale()
        }
        if (nombreJoueur == 4 && lancer == true) {
            if (tour == Joueur2.id && lancer == true) {
                setTimeout(() => {
                    tourJoueur2()
                    touriste()
                    verificationSiPossibleGagnantmanche()
                }, 2000);

            }
            if (tour == Joueur3.id && lancer == true) {
                setTimeout(() => {
                    tourJoueur3()
                    touriste()
                    verificationSiPossibleGagnantmanche()
                }, 2000);

            }
            if (tour == Joueur4.id && lancer == true) {
                setTimeout(() => {
                    tourJoueur4()
                    touriste()
                    verificationSiPossibleGagnantmanche()
                }, 2000);

            }
            verificationGagnantFinale()
        }
        //console.log(gagnant.avoirGagnant)
        //console.log(gagnantPartie)
        //console.log(finPartie)

    }, [dominoPlace.length, LancerPArtie, tour])
    const [listeJoueur, setListeJoueur] = useState([
        'joueur 1', 'joueur 2', 'joueur 3', 'joueur 4'
    ])
    const [testeDeListe, setTeteDeListe] = useState(null)
    const testeDouble = (mainJ1, mainJ2) => {
        if (nombreJoueur == 2) {
            let Joueur1AvoirDouble = false
            let Joueur2AvoirDouble = false

            for (let index = 0; index < cleDouble.length; index++) {
                for (let index1 = 0; index1 < 7; index1++) {
                    if (mainJ1[index1].cle == cleDouble[index] && Joueur2AvoirDouble == false) {
                        console.log('double joueur 1' + mainJ1[index])
                        Joueur1AvoirDouble = true
                        listeJoueur[0] = Joueur1.id
                        listeJoueur[1] = Joueur2.id
                        setTour(Joueur1.id)
                        setTeteDeListe(Joueur1.id)
                        break
                    }
                    if (mainJ2[index1].cle == cleDouble[index] && Joueur1AvoirDouble == false) {
                        console.log('double joueur 2 ' + mainJ2[index])
                        Joueur2AvoirDouble = true
                        listeJoueur[1] = Joueur1.id
                        listeJoueur[0] = Joueur2.id
                        setTour(Joueur2.id)
                        setTeteDeListe(Joueur2.id)
                        break
                    }
                }
            }
        }
    }
    const testeDouble3 = (mainJ1, mainJ2, mainJ3) => {
        if (nombreJoueur == 3) {
            let Joueur1AvoirDouble = false
            let Joueur2AvoirDouble = false
            let Joueur3AvoirDouble = false
            for (let index = 0; index < cleDouble.length; index++) {
                for (let index1 = 0; index1 < 7; index1++) {
                    if (mainJ1[index1].cle == cleDouble[index] && Joueur2AvoirDouble == false && Joueur3AvoirDouble == false) {
                        console.log('double joueur 1' + mainJ1[index])
                        Joueur1AvoirDouble = true
                        listeJoueur[0] = Joueur1.id
                        listeJoueur[1] = Joueur2.id
                        listeJoueur[2] = Joueur3.id
                        setTour(Joueur1.id)
                        break
                    }
                    if (mainJ2[index1].cle == cleDouble[index] && Joueur1AvoirDouble == false && Joueur3AvoirDouble == false) {
                        console.log('double joueur 2 ' + mainJ2[index])
                        Joueur2AvoirDouble = true

                        listeJoueur[0] = Joueur2.id
                        listeJoueur[1] = Joueur3.id
                        listeJoueur[2] = Joueur1.id
                        setTour(Joueur2.id)
                        break
                    }
                    if (mainJ3[index1].cle == cleDouble[index] && Joueur1AvoirDouble == false && Joueur2AvoirDouble == false) {
                        console.log('double joueur 3 ' + mainJ3[index])
                        Joueur3AvoirDouble = true
                        listeJoueur[0] = Joueur3.id
                        listeJoueur[1] = Joueur2.id
                        listeJoueur[2] = Joueur1.id
                        setTour(Joueur3.id)
                        break
                    }
                }
            }
        }
    }
    const testeDouble4 = (mainJ1, mainJ2, mainJ3, mainJ4) => {
        if (nombreJoueur == 4) {
            let Joueur1AvoirDouble = false
            let Joueur2AvoirDouble = false
            let Joueur3AvoirDouble = false
            let Joueur4AvoirDouble = false
            for (let index = 0; index < cleDouble.length; index++) {
                for (let index1 = 0; index1 < 7; index1++) {
                    if (mainJ1[index1].cle == cleDouble[index] && Joueur2AvoirDouble == false && Joueur3AvoirDouble == false && Joueur4AvoirDouble == false) {
                        console.log('double joueur 1' + mainJ1[index])
                        Joueur1AvoirDouble = true
                        listeJoueur[0] = Joueur1.id
                        listeJoueur[1] = Joueur2.id
                        listeJoueur[2] = Joueur3.id
                        listeJoueur[3] = Joueur4.id
                        setTour(Joueur1.id)
                        break
                    }
                    if (mainJ2[index1].cle == cleDouble[index] && Joueur1AvoirDouble == false && Joueur3AvoirDouble == false && Joueur4AvoirDouble == false) {
                        console.log('double joueur 2 ' + mainJ2[index])
                        Joueur2AvoirDouble = true
                        listeJoueur[0] = Joueur2.id
                        listeJoueur[1] = Joueur3.id
                        listeJoueur[2] = Joueur4.id
                        listeJoueur[3] = Joueur1.id
                        setTour(Joueur2.id)
                        break
                    }
                    if (mainJ3[index1].cle == cleDouble[index] && Joueur1AvoirDouble == false && Joueur2AvoirDouble == false && Joueur4AvoirDouble == false) {
                        console.log('double joueur 3 ' + mainJ3[index])
                        Joueur3AvoirDouble = true
                        listeJoueur[0] = Joueur3.id
                        listeJoueur[1] = Joueur4.id
                        listeJoueur[2] = Joueur1.id
                        listeJoueur[3] = Joueur2.id
                        setTour(Joueur3.id)
                        break
                    }
                    if (mainJ4[index1].cle == cleDouble[index] && Joueur1AvoirDouble == false && Joueur2AvoirDouble == false && Joueur3AvoirDouble == false) {
                        console.log('double joueur 4 ' + mainJ3[index])
                        Joueur4AvoirDouble = true
                        listeJoueur[0] = Joueur4.id
                        listeJoueur[1] = Joueur1.id
                        listeJoueur[2] = Joueur2.id
                        listeJoueur[3] = Joueur3.id
                        setTour(Joueur4.id)
                        break
                    }
                }
            }
        }
    }
    // fonction de distribution des dominos
    // sady azo raisina otran hoe initialisation an'ilay manche ihany koa ity
    const DistributionDomino = () => {
        setParametre('none')
        setTour(0)
        setDominoPlace([])
        setMainJoueur1([])
        setMainJoueur2([])
        setMainJoueur3([])
        setMainJoueur4([])
        setPasseTous(false)
        document.getElementById('div1').innerHTML = ''
        document.getElementById('div2').innerHTML = ''
        document.getElementById('div3').innerHTML = ''
        document.getElementById('div4').innerHTML = ''
        console.log(mainJoueur1)
        console.log(mainJoueur2)
        console.log(mainJoueur3)
        console.log(mainJoueur4)
        gagnant.avoirGagnant = false
        gagnant.gagnant = '?'
        setDominoDistribution(Dominos)
        if (finPartie == true) {
            pointJoueur.Joueur1 = 0
            pointJoueur.Joueur2 = 0
            pointJoueur.Joueur3 = 0
            pointJoueur.Joueur4 = 0
            setTour(0)
            setFinPartie(false)
            setGagnantPartie('')
        }
        if (nombreJoueur == 2) {
            let mainJ = []
            let mainJ2 = []
            let domino = dominoDistribution
            distributionJoueur(mainJ, domino)
            distributionJoueur(mainJ2, domino)
            setMainJoueur1(mainJ)
            setMainJoueur2(mainJ2)
            testeDouble(mainJ, mainJ2)
        }
        if (nombreJoueur == 3) {
            let mainJ = []
            let domino = dominoDistribution
            let mainJ2 = []
            let mainJ3 = []
            distributionJoueur(mainJ, domino)
            distributionJoueur(mainJ2, domino)
            distributionJoueur(mainJ3, domino)
            setMainJoueur1(mainJ)
            setMainJoueur2(mainJ2)
            setMainJoueur3(mainJ3)
            testeDouble3(mainJ, mainJ2, mainJ3)
            testeDouble3(mainJ, mainJ2, mainJ3)

        }
        if (nombreJoueur == 4) {
            let mainJ = []
            let mainJ2 = []
            let mainJ3 = []
            let mainJ4 = []
            let domino = dominoDistribution
            distributionJoueur(mainJ, domino)
            distributionJoueur(mainJ2, domino)
            distributionJoueur(mainJ3, domino)
            distributionJoueur(mainJ4, domino)
            setMainJoueur1(mainJ)
            setMainJoueur2(mainJ2)
            setMainJoueur3(mainJ3)
            setMainJoueur4(mainJ4)
            testeDouble4(mainJ, mainJ2, mainJ3, mainJ4)
        }
        handlerPartie()
    }
    //fonction tsy miasa avy ito fa mety ho hilaina ihany
    // const miala = () => {
    //     setMain1(mainJoueur1.length)
    //     var teste = mainJoueur1
    //     teste.pop()
    //     setMainJoueur1(teste)
    //     console.log(mainJoueur1.length)
    // }

    //fonction ampiasaina analana ilay domino vao avy napetraka ambony table 
    const retirerDominoDeposer = (cle) => {
        setMain1(mainJoueur1.length)
        var teste = mainJoueur1
        for (let index = 0; index < teste.length; index++) {
            if (teste[index].cle == cle) {
                teste.splice(index, 1)
            }
        }
        setMainJoueur1(teste)
    }


    //fonction mi-poser domino sur table fa manohy ny chaine mitohy any @ droite
    //specifique ho an'ny joueur 1 satria ny joueur 1 no utilisateur

    const tourJoueur1Ap = () => {
        if (teste != null) {
            let table = dominoPlace
            //let fin = retourFin(dominoPlace)
            let fins = retourFin(table)
            for (let index = 0; index < mainJoueur1.length; index++) {
                if (mainJoueur1[index].cle == teste) {
                    let dom = mainJoueur1[index]

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
                    setDominoPlace(table)
                    setLongDominoPlace(dominoPlace.length)
                    setTeste(0)
                    setDebut(table[0].v2)
                    setFin(table[table.length - 1].v1)
                    //console.log(table[table.length - 1].v1)
                }
            }
            passerTour.PasserJoueur1 = false
        }
        if (teste == null || teste == 0) {
            passerTour.PasserJoueur1 = true
            handlerPartie()
        }
    }
    const tourJoueur1Av = () => {
        if (teste != null) {
            let table = dominoPlace
            let debuts = retouDebut(table)
            for (let index = 0; index < mainJoueur1.length; index++) {
                if (mainJoueur1[index].cle == teste) {
                    let dom = mainJoueur1[index]
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
                    setDominoPlace(table)
                    setLongDominoPlace(dominoPlace.length)
                    setTeste(0)
                    setDebut(table[0].v2)
                    setFin(table[table.length - 1].v1)
                }
            }
            passerTour.PasserJoueur1 = false
        }
        if (teste == null || teste == 0) {
            passerTour.PasserJoueur1 = true
            handlerPartie()
        }
    }

    const poserDominoAp = () => {
        if (tour == Joueur1.id && lancer == true) {
            if (gagnant.avoirGagnant == false) {
                tourJoueur1Ap()

                verificationSiPossibleGagnantmanche()
                touriste()
                setTourDejoueur(tour)
            }
        }
        //tourJoueur()
    }

    //fonction mi-poser domion fa manohy ny chaine mitohy mankany @ gauche 
    const poserDominoAv = () => {
        if (tour == Joueur1.id && lancer == true) {

            if (gagnant.avoirGagnant == false) {
                tourJoueur1Av()

                verificationSiPossibleGagnantmanche()
                setTourDejoueur(tour)
                touriste()

            }
        }
        //tourJoueur()
    }
    const tourJoueur2 = () => {
        if (gagnant.avoirGagnant == false) {
            let table = dominoPlace
            let debut = retouDebut(table)
            let fin = retourFin(table)
            let ChoixPossible = afficherChoixpossible(mainJoueur2)
            console.log('debut ', debut)
            console.log('fin ', fin)
            let Choix = (difficulte == 'difficile' && table.length > 0 ? RechercheDomino(mainJoueur2, table, nombreJoueur) : TrouverChoix(ChoixPossible))

            if (ChoixPossible == 0 || ChoixPossible == null || ChoixPossible == undefined || ChoixPossible.length == 0) {
                passerTour.PasserJoueur2 = true
                handlerPartie()
            }
            else {
                DeposerDominoJoueur(mainJoueur2, debut, fin, Choix)
                handlerPartie()
                passerTour.PasserJoueur2 = false
            }
            //console.log(mainJoueur2)
            console.log('difficulte ', difficulte)
            verificationSiPossibleGagnantmanche()
        }
        console.log('Recherche domino ', RechercheDomino(mainJoueur2, dominoPlace, nombreJoueur))
    }

    const tourJoueur3 = () => {
        if (gagnant.avoirGagnant == false) {
            let table = dominoPlace
            let debut = retouDebut(table)
            let fin = retourFin(table)
            let ChoixPossible = afficherChoixpossible(mainJoueur3)
            let Choix = (difficulte == 'difficile' && table.length > 0 ? RechercheDomino(mainJoueur3, table, nombreJoueur) : TrouverChoix(ChoixPossible))
            if (ChoixPossible == 0 || ChoixPossible == null || ChoixPossible == undefined || ChoixPossible.length == 0) {
                passerTour.PasserJoueur3 = true
                handlerPartie()
            }
            else {
                DeposerDominoJoueur(mainJoueur3, debut, fin, Choix)
                passerTour.PasserJoueur3 = false
                handlerPartie()
            }
            verificationSiPossibleGagnantmanche()
        }
    }

    const tourJoueur4 = () => {
        if (gagnant.avoirGagnant == false) {
            let table = dominoPlace
            let debut = retouDebut(table)
            let fin = retourFin(table)
            let ChoixPossible = afficherChoixpossible(mainJoueur4)
            let Choix = (difficulte == 'difficile' && table.length > 0 ? RechercheDomino(mainJoueur4, table, nombreJoueur) : TrouverChoix(ChoixPossible))
            if (ChoixPossible == 0 || ChoixPossible == null || ChoixPossible == undefined || ChoixPossible.length == 0) {
                passerTour.PasserJoueur4 = true
                handlerPartie()
            }
            else {
                DeposerDominoJoueur(mainJoueur4, debut, fin, Choix)
                handlerPartie()
                passerTour.PasserJoueur4 = false
            }
            verificationSiPossibleGagnantmanche()
        }
    }

    const DeposerDominoJoueur = (mainjoueur, debut, fin, choix) => {
        let table = dominoPlace
        let poser = false
        if (table.length == 0) {
            table.unshift(choix)
            poser = true
            for (let index = 0; index < mainjoueur.length; index++) {
                if (mainjoueur[index].cle == choix.cle) {
                    mainjoueur.splice(index, 1)
                }
            }
            setDominoPlace(table)
            setLongDominoPlace(dominoPlace.length)
        } else {
            if (choix.v1 == debut || choix.v2 == debut || choix.v1 == fin || choix.v2 == fin) {
                for (let index = 0; index < mainjoueur.length; index++) {
                    if (mainjoueur[index].cle == choix.cle) {
                        if (choix.v1 == debut && choix.v1 != choix.v2 && poser == false) {
                            table.unshift(mainjoueur[index])
                            mainjoueur.splice(index, 1)
                            poser = true
                        }
                        if (choix.v2 == debut && choix.v1 != choix.v2 && poser == false) {
                            let tmp = choix.v1
                            choix.v1 = choix.v2
                            choix.v2 = tmp
                            table.unshift(mainjoueur[index])
                            mainjoueur.splice(index, 1)
                            poser = true
                        }
                        if (choix.v2 == fin && choix.v1 != choix.v2 && poser == false) {
                            table.push(mainjoueur[index])
                            mainjoueur.splice(index, 1)
                            poser = true
                        }
                        if (choix.v1 == fin && choix.v1 != choix.v2 && poser == false) {
                            let tmp = choix.v1
                            choix.v1 = choix.v2
                            choix.v2 = tmp
                            table.push(mainjoueur[index])
                            mainjoueur.splice(index, 1)
                            poser = true
                        }
                        if (choix.v1 == debut && choix.v2 == debut && poser == false) {
                            table.unshift(mainjoueur[index])
                            mainjoueur.splice(index, 1)
                        }
                        if (choix.v1 == fin && choix.v2 == fin && poser == false) {
                            table.push(mainjoueur[index])
                            mainjoueur.splice(index, 1)
                        }
                    }
                }
                setDominoPlace(table)
                setLongDominoPlace(dominoPlace.length)
            }
        }
    }

    const afficherChoixpossible = (MainJoueur) => {
        let table = dominoPlace
        let debut = retouDebut(table)
        let fin = retourFin(table)
        let choixPossible = []
        for (let index = 0; index < MainJoueur.length; index++) {
            if (MainJoueur[index].v1 == debut || MainJoueur[index].v1 == fin
                || MainJoueur[index].v2 == debut || MainJoueur[index].v2 == fin) {
                choixPossible.push(MainJoueur[index])
            }
            if (debut == null && fin == null) {
                choixPossible.push(MainJoueur[index])
                console.log(choixPossible)
            }
        }
        return choixPossible
    }

    const [parametre, setParametre] = useState('none')
    const handleParametre = () => {
        if (parametre == 'none') {
            setParametre('flex')
        }
        if (parametre == 'flex') {
            setParametre('none')
        }

    }
    const [affichePoint, setAffichePoint] = useState('none')
    const handlePoint = () => {
        if (affichePoint == 'none') {
            setAffichePoint('block')
        }
        if (affichePoint == 'block') {
            setAffichePoint('none')
        }
    }

    const [lancer, setLancer] = useState(false)
    const handleLancer = () => {
        if (nombreJoueur > 0) {
            setLancer(!lancer)
            setDominoPlace([])
            setMainJoueur1([])
            setMainJoueur2([])
            setMainJoueur3([])
            setMainJoueur4([])
            setPointJoueur({
                Joueur1: 0,
                Joueur2: 0,
                Joueur3: 0,
                Joueur4: 0
            })
            setParametre('none')
        }
    }
    const [tempsChargement, setTempsChargement] = useReducer(x => x + 1, 0)
    useEffect(() => {

        setTimeout(() => {
            setTempsChargement()
        }, 50);
    }, [tempsChargement])
    const ajouterClickFin = ()=>{
        
    } 
    if (tempsChargement < 101) {
        return <>
            <Chargement temps={tempsChargement} />
        </>

    } else {
        return (
            <>

                {/**ito no mampiseho ny main utilisateur */}
                <div className="boiteMainUser">
                    {tour == 0 ? <span className='joueurActu'>{Joueur1.nom}</span> : <span>{Joueur1.nom}</span>}
                    <div className='main'> {mainJoueur1.map(Element => (<Domino
                        valeur1={Element.v1} key={Element.cle} valeur2={Element.v2}
                        cle={Element.cle} onClick={setTeste} emplacement={1} />))}</div>
                </div>

                {/**ito ny mampiseho ilay table de jeu */}
                <div className='tableDeJeu' >
                    {!gagnant.avoirGagnant && <div className="avant" onClick={poserDominoAv}>{tour != 0 ? <Spinner /> : <i className='fas fa-arrow-left'></i>}</div>}
                    <div id="tablesInterne">

                        {
                            dominoPlace.map(Element => (<Domino
                                valeur1={Element.v1}
                                key={Element.cle}
                                valeur2={Element.v2}
                                cle={Element.cle}
                                onClick={setTeste}
                                emplacement={2}
                            />))

                        }

                    </div>
                    <div className="boite1">
                        
                        <div id="div1"> </div>
                        <div id="div2"> </div>
                        <div id="div3"> </div>
                        {!gagnant.avoirGagnant && dominoPlace.length >= 12 && dominoPlace.length< 14 && <div style={{rotate : '90deg'}} className="apres apres2" onClick={poserDominoAp}> {tour != 0 ? <Spinner /> : <i className='fas fa-arrow-right'></i>} </div>}
                        {!gagnant.avoirGagnant && dominoPlace.length>=14 && dominoPlace.length< 26 && <div style={{rotate: '180deg'}} className="apres apres3" onClick={poserDominoAp}> {tour != 0 ? <Spinner /> : <i className='fas fa-arrow-right'></i>} </div>}
                    </div>

                    <div className="boite2">
                        <div id="div4"> </div>
                    </div>
                    <div className="boite3">
                        <div id="div5"> </div>
                    </div>


                    {!gagnant.avoirGagnant && dominoPlace.length>=0 && dominoPlace.length <12 && <div className="apres" onClick={poserDominoAp}> {tour != 0 ? <Spinner /> : <i className='fas fa-arrow-right'></i>} </div>}
                </div>
                {finPartie && <div className='gagnant' style={{ fontSize: '25px' }}>Gagnant {gagnantPartie}</div>}
                <div className='parametreJeu' style={{ display: parametre }}>
                    <div className="nombreJoueurSelect">
                        <label htmlFor="nombreJoueur">Nombre de joueur</label> <br />
                        <select name="nombreJoueur" id="nombreJoueur" onChange={setJoueur} disabled={lancer}>
                            <option value="0">Choisir</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="difficulteSelect">
                        <label htmlFor="difficulte">Difficulté</label> <br />
                        <select name="difficulté" id="" onChange={difficulteHandler} disabled={lancer}>
                            <option value="normale">Normale</option>
                            <option value="difficile">Difficile</option>
                        </select>
                    </div>

                    <NomJoueur nombreJoueur={nombreJoueur} nomJ1={nomJoueur1} setJ1={setNomJoueur1}
                        nomJ2={nomJoueur2} setJ2={setNomJoueur2}
                        nomJ3={nomJoueur3} setJ3={setNomJoueur3}
                        nomJ4={nomJoueur4} setJ4={setNomJoueur4}
                        disable={lancer}
                    />
                </div>
                <Menu />
                <div className='btnBoite'>
                    {lancer && <button onClick={DistributionDomino}>Distribuer <i className='fas fa-play'></i> </button>}
                    {!lancer && nombreJoueur > 0 && <button onClick={handleLancer}>Lancer <i className='fas fa-play'></i></button>}
                    {lancer && <button onClick={handleLancer}>Stoper <i className='fas fa-stop'></i></button>}
                    <button onClick={handleParametre} className='btnParametre'> <i className="fas fa-cog fa-fw"></i> {!lancer && 'Parametre'} </button>
                    <button onClick={handlePoint}> <i className='fas fa-users'></i> </button>
                </div>

                <div className='mainAdversaire'>
                    <MainAdversaire nombreJoueur={nombreJoueur}
                        nomJ2={nomJoueur2} mainJ2={mainJoueur2}
                        nomJ3={nomJoueur3} mainJ3={mainJoueur3}
                        nomJ4={nomJoueur4} mainJ4={mainJoueur4}
                        tourDeJoueur={tour}
                    />
                </div>
                <div style={{ display: affichePoint }}>
                    <Point nombreJoueur={nombreJoueur} nombreJoueur1={Joueur1.nom} nombreJoueur2={Joueur2.nom} nombreJoueur3={Joueur3.nom} nombreJoueur4={Joueur4.nom}
                        point1={pointJoueur.Joueur1} point2={pointJoueur.Joueur2} point3={pointJoueur.Joueur3} point4={pointJoueur.Joueur4}
                    />
                </div>
                <Footer />
            </>
        )
    }

}

export default Plateau