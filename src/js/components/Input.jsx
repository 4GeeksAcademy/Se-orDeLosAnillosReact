import '../components/Input.css'
export const Input = ({ form, onChange, onClick }) => {
    return (
        <div className="container d-flex flex-column align-items-center">
            <input name="nombre"
                type="text"
                value={form.nombre}
                onChange={onChange}
                placeholder="Nombre"
                className="m-2 input-character" />
            <input name="frase"
                type="text"
                value={form.frase}
                onChange={onChange}
                placeholder="Frase"
                className="m-2 input-character" />
            <input name="imagen"
                type="text"
                value={form.imagen}
                onChange={onChange}
                placeholder="URL de la imagen"
                className="m-2 input-character" />
            <button className="btn btn-creado" onClick={onClick}>Agregar personaje</button>
        </div>
    )
}

