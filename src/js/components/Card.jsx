import '../components/Card.css'

export const Card = ({ character }) => {
    return (
        <div className="col-sm-6 col-md-4 d-flex justify-content-center ">
            <div key={character.id} className="card card-cristal mt-3 mb-3" style={{ width: "23rem" }} >
                <div className="d-flex justify-content-center contenedor-img">
                    <img src={character.imagen} className="card-img-top contenedor-img" alt="..." />
                </div>

                <div className="card-body d-flex justify-content-center flex-column body-card">
                    <h5 className="card-title  fs-2 fw-bold">{character.nombre}</h5>
                    <p className="card-text mb-2 card-frase">{character.frase}</p>
                </div>
            </div>
        </div >
    )
}