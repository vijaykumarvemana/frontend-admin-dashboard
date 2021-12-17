export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

const BASE_URL = process.env.REACT_APP_API_URL;

export const addCustomers = () => {

    return  async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/customers`);
            const customers = await response.json();
            dispatch({
                type: ADD_CUSTOMERS,
                payload: customers,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// export const removeCustomer =(index) => ({
//     type: REMOVE_CUSTOMER,
//     paload: index
// })

export const addProducts = () => {
    return  async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            const products = await response.json();
            dispatch({
                type: ADD_PRODUCTS,
                payload: products,
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const addTransaction = () => {
    return  async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/transactions`);
            const transactions = await response.json();
            dispatch({
                type: ADD_TRANSACTION,
                payload: transactions,
            })
        } catch (error) {
            console.log(error);
        }
    }
}








// export const removeProduct = (index) => ({
//     type: REMOVE_PRODUCT,
//     paload: index
// })

   