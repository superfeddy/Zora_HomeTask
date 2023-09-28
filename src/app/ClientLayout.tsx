'use client';

import { FC, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import { useDebounce } from 'usehooks-ts';

import ImageViewer from '@components/ImageViewer';
import SearchBox from '@components/SearchBox';
import SortFilterToolbar from '@components/SortFilterToolbar';

import { useImages } from '@hooks/useImages';

const ClientLayout: FC = () => {
  const [keyword, setKeyword] = useState('');
  const [sortMethod, setSortMethod] = useState('relevant');
  const [colorFilter, setColorFilter] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const debouncedKeyword = useDebounce(keyword, 300);
  const { isLoading, isError, imageData } = useImages({
    keyword: debouncedKeyword,
    sortMethod,
    colorFilter,
    pageNumber
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
        <ImageViewer
          images={imageData?.images}
          isLoading={isLoading}
          isError={isError}
        />
        <div className="w-1/3">
          <ResponsivePagination
            current={pageNumber}
            total={imageData?.total_pages || 0}
            onPageChange={page => setPageNumber(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
