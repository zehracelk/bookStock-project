
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, getSuccess, getBookAuthSuccess } from '../features/stockSlice';
import useAxios from './useAxios';

const useStockCalls = () => {

    const dispatch = useDispatch();
    const { axiosWithToken } = useAxios();

    // Get Stock Calls:

    const getStockData = async (url) => {

        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`stock/${url}/`)
            console.log(url, data)
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

    const getBookAuth = async () => {
        dispatch(fetchStart());
        try {
            const [products, brands] = await Promise.all(
                [axiosWithToken.get("stock/products/"),
                axiosWithToken.get("stock/brands/")]
            );
            console.log(products)
            console.log(brands)

            dispatch(getBookAuthSuccess([products?.data, brands?.data]));

        } catch (error) {
            console.log(error);
            dispatch(fetchFail())

        }
    }
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
        deleteBooks,
        postPublishers,
        putAuthors,
        deleteAuthors,
        postStockData,
        putPublishers,
        getBooks,
        deleteBooks,
        getAuthors,
        deleteAuthors,
        putAuthors,
        postAuthors,
        getBookAuth
    }
}

export default useStockCalls
