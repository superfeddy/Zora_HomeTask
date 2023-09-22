import { IFilterOption } from "../types/FilterOptions.type";
import { useState, useEffect } from "react";
import { IImageInfo } from "../types/ImageInfo.types";
import { fetchImages } from "../helper/fetchImages";

interface IData {
  images: IImageInfo[];
  total: number;
  total_pages: number;
}

export const useImages = ({
  keyword,
  sortMethod,
  colorFilter,
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
        });
        setLoading(false);
        setError(false);
        setImageData({
          images,
          total,
          total_pages,
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
  }, [keyword, sortMethod, colorFilter]);

  return [isLoading, isError, imageData];
};
