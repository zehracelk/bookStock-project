
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice';
import useAxios from './useAxios';

const useStockCalls = () => {

    const dispatch = useDispatch();
    const { axiosWithToken } = useAxios();

    // Get Stock Calls:

    const getStockData = async (url) => {

        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`stock/${url}/`)
            console.log(data)
            dispatch(getSuccess({ data, url }))
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }

    }

    const getPublishers = () => getStockData("firms")
    const getSales = () => getStockData("sales");
    const getBooks = () => getStockData("products");
    const getAuthors = () => getStockData("brands")

    // Delete Calls 

    const deleteStockData = async (url, id) => {
        try {
            await axiosWithToken.delete(`stock/${url}/${id}/`)
            toast("successfully deleted")
            getStockData(url)
        } catch (error) {
            console.log(error);
            toast("can not be deleted");

        }
    };

    const deletePublishers = (id) => deleteStockData("firms", id);
    const deleteBooks = (id) => deleteStockData("products", id);
    const deleteAuthors = (id) => deleteStockData("brands", id);



    // Post Calls

    const postStockData = async (info, url) => {
        try {
            await axiosWithToken.post(`stock/${url}/`, info)
            toast("successfully added")
            getStockData(url)
        } catch (error) {
            console.log(error);
            toast("can not be saved");

        }
    };

    const postPublishers = (info) => postStockData(info, "firms");
    const postAuthors = (info) => postStockData(info, "brands");
    const postBooks = (info) => postStockData(info, "products");

    //Put Calls

    const putStockData = async (info, url) => {
        try {
            await axiosWithToken.put(`stock/${url}/${info.id}/`, info)
            toast("successfully updated")
            getStockData(url)
        } catch (error) {
            console.log(error);
            toast("can not be updated");

        }
    };

    const putPublishers = (info) => putStockData(info, "firms");
    const putAuthors = (info) => putStockData(info, "brands");
    const putBooks = (info) => putStockData(info, "products");



    return {
        getPublishers,
        getSales,
        deletePublishers,
        postPublishers,
        postStockData,
        putPublishers,
        getBooks,
        deleteBooks,
        getAuthors,
        deleteAuthors,
        putAuthors,
        postAuthors
    }
}

export default useStockCalls
