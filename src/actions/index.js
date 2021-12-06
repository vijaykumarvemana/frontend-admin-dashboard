export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';



export const addCustomers = (customers) => ({
    type: ADD_CUSTOMERS,
    paload: customers
}) 

export const removeCustomer =(index) => ({
    type: REMOVE_CUSTOMER,
    paload: index
})

export const addProducts = (products) => ({
    type: ADD_PRODUCTS,
    paload: products
})

export const removeProduct = (index) => ({
    type: REMOVE_PRODUCT,
    paload: index
})

   