import { useId } from 'react';
import './assets/valeur.css'
export function Valeur({ valeur, place }) {
    let className = '';
    let style = '';
    let id = useId()
    if (valeur == 0) {
        className = 'zero'
    }
    if (valeur == 1) {
        className = 'un'
    }
    if (valeur == 2) {
        className = 'deux'
    }
    if (valeur == 3) {
        className = 'trois'
    }
    if (valeur == 4) {
        className = 'quatre'
    }
    if (valeur == 5) {
        className = 'cinq'
    }
    if (valeur == 6) {
        className = 'six'
    }
    if (place == 1) {
        style  = {borderRadius: "5px 5px 0px 0px"}
    }
    if (place == 2) {
        style = {borderRadius: "0px 0px 5px 5px"}
    }
    return <>
        <div className={className} id={ id} style={style}>
            <div className='case1'></div>
            <div className='case2'></div>
            <div className='case3'></div>
            <div className='case4'></div>
            <div className='case5'></div>
            <div className='case6'></div>
            <div className='case7'></div>
            <div className='case8'></div>
            <div className='case9'></div>
        </div>
    </>
}