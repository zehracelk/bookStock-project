
import { useDispatch } from 'react-redux';
import { fetchFail,fetchStart, getSuccess } from '../features/stockSlice';
import useAxios from './useAxios';
const useStockCalls = () => {

    const dispatch = useDispatch();
    const {axiosWithToken} = useAxios();

    const getStockData = async (url) =>{
       
        dispatch(fetchStart())
        try {
          const { data } = await axiosWithToken.get(`stock/${url}/`)
          console.log(data);
          dispatch(getSuccess({data,url}))
        } catch (error) {
          dispatch(fetchFail())
          console.log(error);
        }

    }

    const getPublishers = () =>{ getStockData("firms")}
    const getSales = () =>{ getStockData("sales")}
    const getBooks = () =>{ getStockData("books")}
    


  return {getPublishers, getSales, getBooks}
   
  
}

export default useStockCalls
