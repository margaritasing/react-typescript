import { ChangeEvent, useState } from "react"


export const Formulario = () => {

    const [formulario, setFormulario] = useState({
        postal:'',
        ciudad:''
    })

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = target;
         setFormulario({
            ...formulario,
            [name] : value,
         })        

    }


  return (
    <form autoComplete="of">
        <div className="mb-3">
            <label className="form-label">Código Postal:</label>
            <input type="text" 
                className="form-control"
                name="postal" 
                onChange={handleChange}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Ciudad:</label>
            <input type="text" 
                className="form-control"
                name="ciudad" 
                onChange={handleChange}
            />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
