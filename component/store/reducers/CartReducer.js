const initState ={
    carts:[],
    totalPrice:0,
    totalQty:0,
}
const CartReducer = (state= initState , action)=>{
   
    switch(action.type){
       case 'ADD_TO_CART':
            return{
                ...state,
                carts:[...state.carts, action.payload]
            }

            case 'REMOVE_CART':
                const filtered = state.carts.filter((el)=> el.id !== action.payload)
                return{
                    ...state,
                    carts:filtered
                }
        default:
            return state;
    }

}
export default CartReducer;