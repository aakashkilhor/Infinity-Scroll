import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
const {itemId} = useParams();
// console.log(itemId)
const [imageData, setImageData] = useState();

useEffect(()=>{
    fetchImageData();
},[itemId]);
const  fetchImageData = async ()=>{
    try {
        const response = await axios.get(`https://picsum.photos/id/${itemId}/info`)
        setImageData(response.data)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
        <h1>Image Details</h1>
        <p>{imageData?.download_url}</p>
        <p>{imageData?.id}</p>
        <img src={imageData?.download_url} alt="" height={"100px"} />
    </div>
  );
};

export default Detail;
