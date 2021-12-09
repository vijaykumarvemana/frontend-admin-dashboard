export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';



export const addCustomers = () => {
    return  async (dispatch, getState) => {
        try {
            const response = await fetch('http://localhost:3001/customers');
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
            const response = await fetch('http://localhost:3001/products');
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








// export const removeProduct = (index) => ({
//     type: REMOVE_PRODUCT,
//     paload: index
// })

   