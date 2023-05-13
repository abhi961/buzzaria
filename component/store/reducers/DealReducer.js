const initState = {
   products:[],
  product: {},
};

const DealReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products:[...state.products , ...action.payload],
      
      };
    default:
      return state;
  }
};

export default DealReducer;


