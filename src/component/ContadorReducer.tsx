import { useReducer } from "react"

const initialState = {
    contador:10,
}

type ActionType = 
   | {type: 'incremental'}
   | {type: 'decremental'}
   | {type: 'custom', payload: number}



const contadorReducer = ( state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incremental':
            return{
                ...state,
                contador: state.contador + 1 
            } 
        case 'decremental':
            return{
                ...state,
                contador: state.contador - 1 
            } 
        case 'custom':
            return{
                ...state,
                contador: action.payload
            } 
        default:
            return state
    }

}


export const ContadorReducer = () => {

    const [{contador}, dispatch] = useReducer(contadorReducer, initialState);


  return (
    <>
        <h3>Contador: <span>{contador}</span> </h3>
        <button 
        onClick={() => dispatch({type: 'incremental'}) }
        className="btn btn-outline-primary">
            +1
        </button>
        <button 
        onClick={() => dispatch({type: 'decremental'}) }
        className="btn btn-outline-warning">
            -1
        </button>
        <button 
        onClick={() => dispatch({type: 'custom', payload: 100}) }
        className="btn btn-outline-danger">
            100
        </button>

    </>
  )
}
