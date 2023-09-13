"use client";

import SearchBox from "@components/SearchBox";
import { FC, useState } from "react";

const ClientLayout: FC = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="flex justify-center min-h-screen">
      <div className="container flex flex-col items-center gap-10 py-10 px-4">
        <h1 className="text-3xl font-bold underline underline-offset-8">
          Zora Home Challenge
        </h1>
        <SearchBox keyword={keyword} setKeyword={setKeyword} />
      </div>
    </div>
  );
};

export default ClientLayout;
