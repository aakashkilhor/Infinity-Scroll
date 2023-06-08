import { useState, useEffect } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [page]);

  const handleScroll = () => {
    if (window.scrollY >=(document.documentElement.scrollHeight - window.innerHeight)) 
      {setPage(page + 1);}
      console.log(window.scrollY)
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      setData((previous) => [...previous, ...response.data]);
      console.log(window.scrollY);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ marginLeft: "36vw" }}>
          <img
            src={item.download_url}
            alt={item.author}
            width={"400px"}
            height={"225px"}
          />
          <p>{item.author}</p>
          {/* <p>{item.id}</p> */}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
