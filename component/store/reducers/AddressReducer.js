const intitalState = {
    address:[
    //     {
    //     id:1,
    //     name:"Abhishek",
    // }
]
}

const AddressReducer = (state = intitalState , action) => {
  switch (action.type) {
      case 'ADD_ADDRESS':
          return {
            ...state,
              address:[...state.address ,action.paylad]
          }
  
      default:
          return state;
  }
}

export default AddressReducer;