import logo from '../public/logo.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import './assets/menu.css'
export function Menu() {
    const [afficherMenu, setAfficherMenu] = useState('none')
    const handlerMenu = (e) => {
        if (afficherMenu == 'none') {
            setAfficherMenu('block')
        }
        if (afficherMenu == 'block') {
            setAfficherMenu('none')
        }
    }
    return (
        <>
            <div className="menu">
                <button onClick={handlerMenu}> <img src={logo} alt='Menu'/></button>
                <div className="lien" style={{display: afficherMenu}}>
                    <Link to='/'>Acceuil</Link>
                    <hr />
                    <Link to='/'>Multi-joueur</Link>
                </div>
            </div>
        </>
    )
}