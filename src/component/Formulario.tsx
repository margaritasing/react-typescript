

export const Formulario = () => {
  return (
    <form>
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" 
                className="form-control"
                name="email" 
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text" 
                className="form-control"
                name="nombre" 
            />
        </div>


    </form>
  )
}
