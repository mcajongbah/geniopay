import { useState } from "react";

type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
  const [search, setSearch] = useState("");
  return (
    <div className="lg:h-[53px] h-10 lg:w-[304px] w-52 border space-x-4 border-[#AAC0C5] rounded-2xl flex items-center px-4">
      <span className="text-[#55676B]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none w-full border-none"
        placeholder="Search"
      />
    </div>
  );
};
export default Search;
