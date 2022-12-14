import axios from "axios";
import { useEffect } from "react"
import { useSelector } from "react-redux";


const Publishers = () => {
  const { token } = useSelector((state) => state.auth)
  const BASE_URL = "https://14375.fullstack.clarusway.com/";
  const getPublishers = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getPublishers();
  }, [])



  return (
    <div>
      pblishers
    </div>
  )
}

export default Publishers;
