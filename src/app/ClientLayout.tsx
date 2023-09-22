"use client";

import SearchBox from "@components/SearchBox";
import SortFilterToolbar from "@components/SortFilterToolbar";
import { FC, useState } from "react";

const ClientLayout: FC = () => {
  const [keyword, setKeyword] = useState("");
  const [sortMethod, setSortMethod] = useState("relevant");
  const [colorFilter, setColorFilter] = useState("");

  return (
    <div className="flex justify-center min-h-screen text-2xl">
      <div className="container flex flex-col items-center gap-16 pb-10 pt-20 px-4">
        <h1 className="text-5xl font-bold underline underline-offset-4">
          Zora Home Challenge
        </h1>
        <SearchBox keyword={keyword} setKeyword={setKeyword} />
        <SortFilterToolbar
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
        />
      </div>
    </div>
  );
};

export default ClientLayout;
