export function Input({ value, onChange, placeholder, id , label, disabled}) {
    return <>
        <div className="InputJoueur">
            <label htmlFor='id'>{label}</label> <br />
            <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} disabled={disabled}/>
        </div>
    </>
}