import { IImageInfo } from '@type/ImageInfo.type';
import { FC } from 'react';
import { BeatLoader } from 'react-spinners';

interface IImageViewer {
  images?: IImageInfo[];
  isLoading: boolean;
  isError: boolean;
}

const ImageViewer: FC<IImageViewer> = ({
  images,
  isLoading,
  isError
}: IImageViewer) => {
  if (isLoading) {
    return (
      <BeatLoader
        color="#000"
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  } else if (isError || !images) {
    return (
      <div className="w-screen h-60 flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          There were some errors while fetching the image data.
        </h1>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-between place-items-center gap-5">
      {images.map(({ thumb }) => (
        <img key={thumb} src={thumb} />
      ))}
    </div>
  );
};

export default ImageViewer;
