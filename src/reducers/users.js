import { ADD_CUSTOMERS, REMOVE_CUSTOMER } from "../actions"
import { initialState } from "../store"


const usersReducer = (state = initialState.customer, action) => {
    switch (action.type) {
        case ADD_CUSTOMERS:{
            return {
                ...state,   
                customers: [...state.customers, action.payload]
            }
           
        }
        
        case REMOVE_CUSTOMER:{
            return {
                ...state,
                customers: state.customers.filter((customer,i) => i !== action.payload)
        }
    }
        default:
        return state
    }
    }


export default usersReducer