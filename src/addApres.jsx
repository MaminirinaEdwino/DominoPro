import { Spinner } from "./spinner";

/* eslint-disable react/prop-types */
export default function Apres({onClick, avoirGagnant, tour}) {
    return <>
        {!avoirGagnant && <div className="apres" onClick={(e)=>onClick(e.target)}> {tour != 0 ? <Spinner /> : <i className='fas fa-arrow-right'></i>} </div>}
    </>
}