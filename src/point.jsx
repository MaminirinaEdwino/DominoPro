import './assets/point.css'

export function Point({ nombreJoueur, point1, point2, point3, point4, nombreJoueur1, nombreJoueur2, nombreJoueur3, nombreJoueur4 }) {
    let teste = ''
    if (nombreJoueur == 2) {
        teste = 'point J2'
        return <>
            <div className={teste}>
                <span className="nomjoueur">{nombreJoueur1}</span><span className="nomjoueur">{nombreJoueur2}</span>
                <span className="pointJoueur">{point1}</span><span className="pointJoueur">{point2}</span>
            </div>
        </>
    }
    if (nombreJoueur == 3) {
        teste = 'point J3'
        return <>
            <div className={teste}>
                <span className="nomjoueur">{nombreJoueur1}</span><span className="nomjoueur">{nombreJoueur2}</span>
                <span className="nomjoueur">{nombreJoueur3}</span>
                <span className="pointJoueur">{point1}</span><span className="pointJoueur">{point2}</span>
                <span className="pointJoueur">{point3}</span>

            </div>
        </>
    }
    if (nombreJoueur == 4 || nombreJoueur == 0) {
        teste = 'point J4'
        return <>
            <div className={teste}>
                <span className="nomjoueur">{nombreJoueur1}</span><span className="nomjoueur">{nombreJoueur2}</span>
                <span className="nomjoueur">{nombreJoueur3}</span><span className="nomjoueur">{nombreJoueur4}</span>
                <span className="pointJoueur">{point1}</span><span className="pointJoueur">{point2}</span>
                <span className="pointJoueur">{point3}</span><span className="pointJoueur">{point4}</span>
            </div>
        </>
    }
}