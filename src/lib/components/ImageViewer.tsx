import { IImageInfo } from '@type/ImageInfo.type';
import { FC } from 'react';

interface IImageViewer {
  images: IImageInfo[];
}

const ImageViewer: FC<IImageViewer> = ({ images }: IImageViewer) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-wrap gap-y-10 justify-center gap-5 pb-5">
        {images.map(({ thumb }) => (
          <img key={thumb} src={thumb} />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
