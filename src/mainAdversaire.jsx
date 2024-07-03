/* eslint-disable react/prop-types */
import './assets/mainJoueur.css'
import { GenererNombreAleatoire } from './fichierJs/fonction'
export function MainAdversaire({ nombreJoueur, nomJ2, mainJ2, nomJ3, mainJ3, nomJ4, mainJ4, tourDeJoueur }) {
    const afficherMain = (main) => {
        let mains = []
        for (let index = 0; index < main.length; index++) {
            mains.push(<>
                <div key={'teste'+index} style={{
                    height: '80px', width: '40px'
                }} className='dominovide'>
                </div>
            </>)
        }
        return (
            <>
                {mains.map(Element => (<div key={'teste' + GenererNombreAleatoire(120, 0) + 'teste' + GenererNombreAleatoire(1000, 0)}>{Element}</div>))}
            </>
        )
    }
    const mainVide = [
        1,2,3,4,5,6,7
    ]
    if (nombreJoueur == 0) {
        return <>
            <div className="mainJoueur2">
                {nomJ2}
                <div className="mainJ">
                    {afficherMain(mainVide)}
                </div>
            </div>
            <div className="mainJoueur3">
                {nomJ3}
                <div className="mainJ">
                    {afficherMain(mainVide)}
                </div>
            </div>
            <div className="mainJoueur3">
                {nomJ4}
                <div className="mainJ">
                    {afficherMain(mainVide)}
                </div>
            </div>
        </>
    }
    const style = {color: 'blue', fontWeight : '500'}
    if (nombreJoueur == 2) {
        return <>
            <div className="mainJoueur2">
                {tourDeJoueur == 1 ? <span style={style} >{nomJ2}</span>: <span>{nomJ2}</span> }
                
                <span className='nomdominoadve'> : {mainJ2.length}</span>
                <div className="mainJ">
                    {afficherMain(mainJ2)}
                </div>
            </div>
        </>
    }
    if (nombreJoueur == 3) {
        return (<>
            <div className="mainJoueur2"> 
                {tourDeJoueur == 1 ? <span style={style}>{nomJ2}</span> : <span>{nomJ2}</span> }
                <span className='nomdominoadve'> : {mainJ2.length}</span>
                <div className="mainJ">
                    {afficherMain(mainJ2)}
                </div>
            </div>
            <div className="mainJoueur3"> 
                {tourDeJoueur == 2 ? <span style={style}>{nomJ3}</span> : <span>{nomJ3}</span> }
                <span className='nomdominoadve'> : {mainJ3.length}</span>
                <div className="mainJ">
                    {afficherMain(mainJ3)}
                </div>
            </div>
        </>)
    }
    if (nombreJoueur == 4) {
        return (<>
            <div className="mainJoueur2">
                {tourDeJoueur == 1 ? <span style={{color: 'blue'}}>{nomJ2}</span> : <span>{nomJ2}</span> }
                 <span className='nomdominoadve'> : {mainJ2.length}</span>
                <div className="mainJ">
                    {afficherMain(mainJ2)}
                </div>
            </div>
            <div className="mainJoueur3">
                {tourDeJoueur == 2 ? <span style={{color: 'blue'}}>{nomJ3}</span> : <span>{nomJ3}</span> }
                <span className='nomdominoadve'> : {mainJ3.length}</span>
                <div className="mainJ">
                    {afficherMain(mainJ3)}
                </div>
            </div>
            <div className="mainJoueur4">
                {tourDeJoueur == 3 ? <span style={{color: 'blue'}}>{nomJ4}</span> : <span>{nomJ4}</span> }
                <span className='nomdominoadve'> : {mainJ4.length}</span>
                <div className="mainJ">
                    {afficherMain(mainJ4)}
                </div>
            </div>
        </>)
    }
}