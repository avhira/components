import Pagination from './pagination';
import { useEffect, useState } from 'react';

export default function Apps() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [halaman, setHalaman] = useState(0);

  const limit = 10;

  useEffect(() => {
    const datas = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`);
      const data = await res.json();
      const total = res.headers.get('x-total-count');
      setPageCount(Math.ceil(total / limit));
      setItems(data);
    };
    datas();
  }, []);

  const fetchDatas = async (currentPage) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`);
    const data = await res.json();
    return data;
  };

  return (
    <div className="background">
      <div className="app">
        {items.map((item) => (
          <ul key={item.id}>
            <li>ID: {item.id}</li>
          </ul>
        ))}
      </div>
      <Pagination
        setItems={setItems}
        pageCount={pageCount}
        halaman={halaman}
        setHalaman={setHalaman}
        fetchDatas={fetchDatas}
      />
    </div>
  );
}
