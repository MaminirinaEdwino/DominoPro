import BoutonRetour from '../boutonRetour/boutonRetour'
import './asset/manuel.css'
import acceuil from './asset/acceuil.png'
import plateau from './asset/plateau.png'
import nbr from './asset/nbrJoueur.png'
import difficulte from './asset/difficulte.png'
import nom from './asset/nom.png'
import distribution from './asset/distribuer.png'
import choisir from './asset/poser.png'
import stopper from './asset/stoper.png'
import Etape from './etape'
import './scroll.js'
export default function Manuel() {

    const etape = [
        {
            image: acceuil,
            etape: 'Lancer le jeu'
        },
        {
            image: plateau,
            etape: 'Choisir mode solo'
        },
        {
            image: nbr,
            etape: 'Choisir le nombre de joueur'
        },
        {
            image: difficulte,
            etape: 'Choisir la difficulté'
        },
        {
            image: nom,
            etape: 'Modifier le nom de chaque joueur'
        },
        {
            image: distribution,
            etape: 'Lancer le jeu et distribuer'
        },
        {
            image: choisir,
            etape: 'Lorsque votre nom est en bleu, choisissez et placer votre domino'
        },
        {
            image: stopper,
            etape: 'vous pouvez arreté le jeu en cliquant sur stoper'
        },
    ]
    return <>
        <BoutonRetour />
        <h1 className='titleManuel'>Manuel d&apos;utilisation</h1>
        <section>

            {etape.map((etap, i) => <Etape key={i} image={etap.image} etape={etap.etape} indice={i + 1} />)}
            <article className='regle'>
                <p>Les Règles du jeu </p>
                <ul>



                </ul>
            </article>
            <article>
                <p>Pour debuter un partie : </p>
                <ul>
                    <li>Pour debuter une partie, c&apos;est le joueur qui a un domino double avec la plus grande valeur qui commence.</li>
                    <li>Dans le cas où les joueur ne possèdent pas de domino Double alors c&apos;est celui avec un domino avec la plus grande valeur qui commence. </li>
                </ul>
            </article>
            <article>
                <p>Lorsque la partie Commence : </p>
                <ul>
                    <li>Lorsque la partie commence, les joueurs devront poser des dominos si ils possèdent des domino compatibles avec ceux qui sont sur la table</li>
                    <li>sinon, ils peuvent passés leurs tour</li>
                </ul>
            </article>
            <article>
                <p>Pour gagner une manche : </p>
                <ul>
                    <li>Pour gagner une manche, il faut placer tous les dominos en main ou faire en sorte que tous les joueurs ne puissent plus déposer de domino</li>
                    <li>lorsqu&apos;un joueur remporte une manche la somme des dominos de ses adversaire sera ajouter a ses points</li>
                </ul>
            </article>
            <article>
                <p>Pour remporter une partie : </p>
                <ul>
                    <li>pour remporter la partie, il suffit de reunir 60 point dans le cas ou les autres joueur sont à 0 point</li>
                    <li>Dans le cas contraire il faut 120 point</li>
                </ul>
            </article>
        </section>


    </>
}