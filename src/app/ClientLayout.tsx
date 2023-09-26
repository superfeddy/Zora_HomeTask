'use client';

import { FC, useState } from 'react';

import ImageViewer from '@components/ImageViewer';
import SearchBox from '@components/SearchBox';
import SortFilterToolbar from '@components/SortFilterToolbar';

import { useImages } from '@hooks/useImages';

const ClientLayout: FC = () => {
  const [keyword, setKeyword] = useState('');
  const [sortMethod, setSortMethod] = useState('relevant');
  const [colorFilter, setColorFilter] = useState('');
  const { isLoading, isError, imageData } = useImages({
    keyword,
    sortMethod,
    colorFilter
  });

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
        {!isLoading && !isError && imageData?.images && (
          <ImageViewer images={imageData.images} />
        )}
      </div>
    </div>
  );
};

export default ClientLayout;
