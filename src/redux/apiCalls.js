import {loginSuccess,loginFailure,loginStart} from '../redux/userRedux';
import { publicRequest } from '../makeRequest';
// import { useNavigate } from 'react-router-dom';
export const login=async(dispatch,user,navigate)=>{
    dispatch(loginStart());
try{
    const res= await publicRequest.post('/auth/login',user)
    dispatch(loginSuccess(res.data));
    setTimeout(()=>{
        navigate('/');
    },1000)
}
catch(err){
dispatch(loginFailure());
}
}