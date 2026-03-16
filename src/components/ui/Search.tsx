import { useState } from "react";
import search from "../../assets/icons/search.svg";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full flex flex-row items-center justify-end">
      <img
        src={search}
        alt="Search Icon"
        className=" absolute top-3 right-4 transform  h-5 w-5 text-gray-500"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products, customers, orders..."
        className="h-12 w-1/3 text-[14px] pl-10 pr-4 py-2  bg-white text-gray-900  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
