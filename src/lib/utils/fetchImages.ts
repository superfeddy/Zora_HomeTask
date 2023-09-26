import { IFilterOption } from '../types/FilterOptions.type';
import { IImageInfo } from '../types/ImageInfo.type';

interface IResponseResult {
  urls: IImageInfo;
  [key: string]: any;
}

export const fetchImages = async ({
  keyword,
  sortMethod,
  colorFilter
}: IFilterOption) => {
  const url = `${
    process.env.NEXT_PUBLIC_API_BASE_URL
  }/search/photos?client_id=${
    process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
  }&order_by=${sortMethod}${keyword ? `&query=${keyword}` : ''}${
    colorFilter && `&color=${colorFilter}`
  }`;
  const jsonData = await fetch(url);
  const { results, total_pages, total } = await jsonData.json();
  const images = results.map(({ urls }: IResponseResult) => urls);
  return { images, total, total_pages };
};
