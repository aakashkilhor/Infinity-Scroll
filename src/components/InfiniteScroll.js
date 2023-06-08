import { useState, useEffect } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      console.log(data)
      setData((previous) => [...previous, ...response.data]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleload = () => {
    setPage(page + 1);
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
          <p>{item.id}</p>
        </div>
      ))}
      <button onClick={handleload}>Click to get more</button>
    </div>
  );
};

export default InfiniteScroll;
