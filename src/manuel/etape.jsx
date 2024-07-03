/* eslint-disable react/prop-types */
import './asset/manuel.css'
export default function Etape({image, etape, indice}) {
    return <article>
        
        <p>{indice}. {etape} </p>
        <img src={image} alt="" className="etape" />
    </article>
}