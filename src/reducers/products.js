import { ADD_PRODUCTS, REMOVE_PRODUCT } from "../actions";
import { initialState } from "../store";

const productsReducer = (state = initialState.product, action) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            
            }
        }

        case REMOVE_PRODUCT: {
            return {
                ...state,
                products: state.products.filter((product, i) => i !== action.payload),
            }

    }

    default:    
        return state;

}

}

export default productsReducer;