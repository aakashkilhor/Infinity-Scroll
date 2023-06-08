import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [chosen, setChosen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

// let timeout;
window.onmousemove = function(){
  setChosen(false)
  setTimeout(function(){setChosen(true)}, 5000);
}


const handleScroll = () => {
    if (window.scrollY >=(document.documentElement.scrollHeight - window.innerHeight)) 
      {setPage(page + 1);}
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      setData((previous) => [...previous, ...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (itemId)=>{navigate(`detail/${itemId}`)}

  return (
    <div className="container">
       <h1 className="heading">Image List</h1>
      {data.map((item,index) => (
        <div key={item.id} className="item" onClick={()=>handleClick(item.id)}>
          <img
            className="image"
            src={item.download_url}
            alt={item.author}
            width={"400px"}
          />
          <p className="author">{item.author}</p>
          {chosen&&index>=data.length-2&&<p className="chosen">I am chosen</p>}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;

