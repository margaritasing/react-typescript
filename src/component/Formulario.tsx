import { useForm } from '../hooks/useForm';


interface FormData {
    email: string,
    nombre: string,
    edad: number
}


export const Formulario = () => {

    const {formulario, handleChange } = useForm<FormData>({
        email:'',
        nombre:'',
        edad: 44
    });

    const {email, nombre, edad  } = formulario

    /* const [formulario, setFormulario] = useState({
        email:'',
        nombre:''
    })

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = target;
         setFormulario({
            ...formulario,
            [name] : value,
         })        

    }
 */

  return (
    <form autoComplete="of">
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" 
                className="form-control"
                name="email" 
                onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text" 
                className="form-control"
                name="nombre" 
                onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Edad:</label>
            <input type="number" 
                className="form-control"
                name="edad" 
                onChange={handleChange}/>
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
