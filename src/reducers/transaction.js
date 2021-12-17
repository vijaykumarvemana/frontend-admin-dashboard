import { ADD_TRANSACTION } from "../actions";
import { initialState } from "../store";

const transactionReducer = (state = initialState.transaction, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return {
        ...state,
        transactions: action.payload,
      };
    }

    default:
      return state;
  }
};


export default transactionReducer;
