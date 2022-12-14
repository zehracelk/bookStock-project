import { useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const useAuthCalls = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const BASE_URL = "https://14375.fullstack.clarusway.com/";
  
    const login = async (userInfo) => {
      dispatch(fetchStart());
      try {
        const { data } = await axios.post(
          `${BASE_URL}account/auth/login/`,
          userInfo
        );
  
        dispatch(loginSuccess(data));
        toast("Login performed");
        navigate("/stock");
      } catch (err) {
        dispatch(fetchFail());
        toast("Login can not be performed");
      }
    };
  
    const logout = async () => {
      dispatch(fetchStart());
      try {
        await axios.post(`${BASE_URL}account/auth/logout/`);
        dispatch(logoutSuccess());
        toast("Logout performed");
        navigate("/");
      } catch (err) {
        dispatch(fetchFail());
        toast("Logout can not be performed");
      }
    };
  
    const register = async (userInfo) => {
      dispatch(fetchStart());
      try {
        const { data } = await axios.post(
          `${BASE_URL}account/register/`,
          userInfo
        );
        dispatch(registerSuccess(data));
        toast("Register performed");
        navigate("/stock");
      } catch (err) {
        dispatch(fetchFail());
        toast("Register can not be performed");
      }
    };
  
    return {
      login,
      logout,
      register,
    };
  };
  
  export default useAuthCalls;