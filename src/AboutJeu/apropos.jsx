import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../footer"
import './assets/about.css'
import BoutonRetour from "../boutonRetour/boutonRetour"

export function Apropos() {
    const information = [
        'DominoPRO',
        'DominoPRO est un site de jeu de domino simple et intuitive',
        'DominoPRO est un jeu accessible a tous le monde',
        'DominoPRO ne nécessite aucun télechargement',
        'Le jeu nous permet d\'affronter des adversaires virtuels',
        'et dont les règles de jeu sont simples',
        'Le jeu offre aussi une large choix au niveau du nombre de joueur et de la difficulté',
        'A propos du developpeur ...',
        'DominoPro a été conçue et developpé RAFITOARISOA Maminirina Edwino',
        'Etudiant en developpement d\'application informatique ',
        'En 3 ème année à l\'Athénée Saint Joseph Antsirabe',
        'Le jeu à été developpé avec le langage Javascript et le framework Reactjs ',
        <>Voici le lien pour acceder au jeu <Link to="/vsIA" className="lien">cliquer ici </Link> et pour revenir à l&apos;acceuil <Link to="/" className="lien">cliquer ici</Link></>
    ]

    const [etape, setEtape] = useState(0)
    let display = ''
    const setDisplay = ()=>{
        display = 'none'
        display = 'block'
    }
    const handlePlus = (e) => {
        setEtape(etape => etape + 1)
        setDisplay()
    }
    const handleMoins = (e) => {
        setEtape(etape => etape - 1)
        setDisplay()
    }

    return <>
        <div className="about" id="about" >
            <div className={etape == 0 ? 'titreAPropos grand' : 'titreAPropos petit'}>
                <Link to="/">DominoPRO</Link> 
            </div>
            {etape > 0 && <div className="information" style={{display: display}}>
                {information[etape]}
            </div>}
            {//etape > 0 && <button className="precedent" onClick={handleMoins}>précedent</button>
            }
            {etape < information.length - 1 && <button className="suivant" onClick={handlePlus}>{etape == 0 ? 'Afficher information' : 'suivant'} </button>}
            <BoutonRetour/>
        </div>
        
        <Footer />
    </>
}