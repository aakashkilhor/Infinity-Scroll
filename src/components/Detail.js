import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
const {itemId} = useParams();
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
    <div className="container itemd">
        <h1 className="headingdetail" >Image Details</h1>
        <a href={imageData?.download_url}>{imageData?.download_url}</a>
        <p>Id : {imageData?.id}</p>
        <img src={imageData?.download_url} alt="" className="image" height={"auto"} />
    </div>
  );
};

export default Detail;
