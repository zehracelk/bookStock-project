import axios from "axios";

import React from 'react'
import { useSelector } from "react-redux";

const BASE_URL = "https://14375.fullstack.clarusway.com/";

//* Token'siz api istekleri icin bir instance olustur.
export const axiosPublic = axios.create({
    baseURL: BASE_URL,
});

const useAxios = () => {

    const { token } = useSelector(state => state.auth)
    //* Token gerektiren istekler icin bir baska instance olusutur.
    const axiosWithToken = axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: `Token ${token}` },
    });

    return { axiosWithToken }
}

export default useAxios
