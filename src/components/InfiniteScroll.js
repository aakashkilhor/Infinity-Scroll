import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [page]);

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
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ marginLeft: "36vw" }} onClick={()=>handleClick(item.id)}>
          <img
            src={item.download_url}
            alt={item.author}
            width={"400px"}
            height={"225px"}
          />
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;

