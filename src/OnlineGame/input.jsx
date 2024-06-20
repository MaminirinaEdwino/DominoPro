import './assets/dits/input.css'

export function Input({ placeholder, id, type, name, label }) {
    return <>
        <label htmlFor={id}>{ label}</label> <br />
        <input className='inputFormulaire' type={type} placeholder={placeholder} id={id} name={name} required/> <br />
    </>
}