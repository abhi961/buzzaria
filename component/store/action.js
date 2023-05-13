        export const AddtoCart = (prodictItem) => {
            return{
                type : "ADD_TO_CART",
                payload: prodictItem, 
            }
        }

        export const removeCart = (id) => {
            return{
                type:'REMOVE_CART',
                payload:id
            }
        }