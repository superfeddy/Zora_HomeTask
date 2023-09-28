import { IFilterOption } from '@type/FilterOptions.type';
import { IImageInfo } from '@type/ImageInfo.type';
import { useEffect, useState } from 'react';

import { fetchImages } from '@utils/fetchImages';

interface IData {
  images: IImageInfo[];
  total: number;
  total_pages: number;
}

export const useImages = ({
  keyword,
  sortMethod,
  colorFilter,
  pageNumber = 1
}: IFilterOption) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [imageData, setImageData] = useState<IData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { images, total, total_pages } = await fetchImages({
          keyword,
          sortMethod,
          colorFilter,
          pageNumber
        });
        setLoading(false);
        setError(false);
        setImageData({
          images,
          total,
          total_pages
        });
      } catch (error) {
        setLoading(false);
        setError(true);
        setImageData(undefined);
      }
    };

    //  Init the status
    setLoading(true);
    setError(false);
    setImageData(undefined);

    //  Fetch data
    fetchData();
  }, [keyword, sortMethod, colorFilter, pageNumber]);

  return {
    isLoading,
    isError,
    imageData
  };
};
