const initState = {
  products: [],
  product:{},
  
};

const ProductsReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_PRODUCTS":
      // console.log(action ,"Text*****************");
      return {
        ...state,
        products: [...state.products, ...action.payload],
        // product: state.products.find((product) => product.product_id === action.product_id),
      };

      case "SELECTEDPRODUCTS":
        console.log(action.payload , "******************* singfle ")
        return{ 
          ...state,
          product: action.payload[0],
        }

        case "GET_DEAL_PRODUCT":
          return {
            ...state,
            products:[...state.products, ...action.payload]
          }
          case "GET_DEALS_DETAILS":
            return{
              ...state,
              products:[...state.products, action.payload]
            }

            case "GET_LATEST_PRO":
              return {
                ...state,
                products:[...state.products, ...action.payload],
              }

              case "SELECT_SIZE":
                return{}

              case "GET_FILTER_CATEGORY":
                console.log(action.payload,"filter category $$$$$$$$$$$$$$$$################")
                return{
                  ...state, 
                   products:[...state.products, ...action.payload]
                }

                case "REMOVE_SELECTED_PRODUCT":
                  return{}
    default:
      return state;
  }
};

export default ProductsReducer;

