const INITIAL_STATE={
    user:[],
    loggedInUser:false
}

const LoginReducer=(state=INITIAL_STATE,action)=>{
    console.log(state)
switch(action.type){
    case 'LOGIN_SUCCESS':
        return {
            ...state,
            user:[...state.user,action.payload],
            loggedInUser:true
        }
        default:return state;
}
}
export default LoginReducer;