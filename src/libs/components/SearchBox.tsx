import { FC } from "react";

interface ISearchBox {
  keyword: string;
  setKeyword: (newKeyword: string) => void;
}

const SearchBox: FC<ISearchBox> = ({ keyword, setKeyword }) => {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="w-full px-4 py-2 text-xl border border-solid border-gray-500 rounded"
      placeholder="Keyword here..."
    />
  );
};

export default SearchBox;
