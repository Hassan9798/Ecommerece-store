export const LOGINSUCCESS=(payload)=>{
    console.log(payload);
    return{
        type:'LOGIN_SUCCESS',
        payload:payload
    }
}