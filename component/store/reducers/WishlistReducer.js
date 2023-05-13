const inital_State = {

  wishlistcarts:[],
}
 
  const WishlistReducer = (state= inital_State , action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      
    return{
      ...state,
      wishlistcarts:[...state.wishlistcarts, action.payload]
    }
  
    default:
      return state
  }
}
export default WishlistReducer
