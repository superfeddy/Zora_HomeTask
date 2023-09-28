import { render, screen } from '@testing-library/react';

import ImageViewer from '../ImageViewer';

describe('<ImageViewer />', () => {
  describe('when isLoading is true', () => {
    it('should render spinner', () => {
      render(<ImageViewer isLoading={true} isError={false} />);
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  describe('when isLoading is false', () => {
    const errorMsg = 'There were some errors while fetching the image data.';
    describe('when isError is true', () => {
      it('should render an error message', () => {
        render(<ImageViewer isLoading={false} isError={true} images={[]} />);
        expect(screen.getByText(errorMsg)).toBeInTheDocument();
      });
    });
    describe('when images is undefined', () => {
      it('should render an error message', () => {
        render(<ImageViewer isLoading={false} isError={false} />);
        expect(screen.getByText(errorMsg)).toBeInTheDocument();
      });
    });
    describe('when isError is false and images is not undefined', () => {
      it('should render images', () => {
        const imageUrls = new Array(12).fill(0).map((value, index) => ({
          raw: `Raw-ImageUrl${index}`,
          full: `Full-ImageUrl${index}`,
          regular: `Regular-ImageUrl${index}`,
          small: `Small-ImageUrl${index}`,
          thumb: `Thumb-ImageUrl${index}`,
          small_s3: `Small-S3-ImageUrl${index}`
        }));
        render(
          <ImageViewer isLoading={false} isError={false} images={imageUrls} />
        );
        expect(screen.getAllByRole('img').length).toBe(12);
      });
    });
  });
});
