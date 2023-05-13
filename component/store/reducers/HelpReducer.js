const initalState = {
messages:[],
    Mobile:[],
    Email:[],
}

const HelpReducer = (state = initalState , action) => {
  switch (action.type) {
      case "ADD_MESSAGE":
          return {
              ...state, 
              messages:[...state.messages ,action.payload ]
          }
  
      default:
          return state;
  }
}