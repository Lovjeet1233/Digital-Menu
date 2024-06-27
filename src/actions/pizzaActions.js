import axios from "axios"
export const getAllPizzas = ()=>async dispatch=>{
    dispatch({type : 'GET_PIZZA_REQUEST'}
    )
    try {
const response = await axios.get('api/pizza/getallpizzas')

        dispatch({type : 'GET_PIZZA_SUCCESS', payload :response.data })
    } catch (error) {
        dispatch({type : 'GET_PIZZA_FAILED', payload :error })
    }
}