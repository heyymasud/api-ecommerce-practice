import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";
import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";
import { fetchDataCall, searchDataCall } from "../services/product.service";

const HomePages = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchData = async () => {
    const data = await fetchDataCall();
    setDataProducts(data.data.products);
    // axios.get("https://dummyjson.com/products").then((res) => {
    //   setDataProducts(res.data.products);
    // });
  };

  const searchData = async (query) => {
    const data = await searchDataCall(query);
    setDataProducts(data.data.products);
  }

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
    searchData(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Header />
      <div className="p-10">
        <div className="flex justify-center">
          <div className="flex border-2 border-gray-50 bg-gray-50 pl-2 rounded-xl w-1/3">
            <div className="flex items-center">
              <BsSearch className="text-2xl" />
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-4 pl-10 text-sm text-gray-900 focus:border-gray-500"
              placeholder="Search ..."
              value={searchValue}
              onChange={onChangeSearch}
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-4 gap-2">
            {dataProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
