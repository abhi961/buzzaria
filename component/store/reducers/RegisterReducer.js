const intitalState = {
    users:[
        // {
        //     id:1,
        //     name:'Abishek',
        // }
    ]
}

const RegisterReducer = (state = intitalState , action) => {
    switch (action.type) {
         case 'ADD_REGISTER':
             return {
                users:[action.payload , ...state.users],
             }
        default:
            return state;
    }
}
export default RegisterReducer;