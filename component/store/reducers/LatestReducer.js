const initState = {
    products:[],
   product: {},
 };
 
 const LatestReducer = (state = initState, action) => {
   console.log(action);
   switch (action.type) {
     case "GET_PRODUCT":
       console.log(action ,"Text*****************");
       return {
         ...state,
         dealPro:[...state.dealPro , ...action.payload],
         products: state.products.find((product) => product.id === action.id),
       };
     default:
       return state;
   }
 };
 
 export default LatestReducer;
 
 
 