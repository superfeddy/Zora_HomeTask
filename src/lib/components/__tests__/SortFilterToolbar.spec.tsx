import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import SortFilterToolbar from '../SortFilterToolbar';

const mockSortMethod = 'relevant';
const mockSetSortMethod = jest.fn();
const mockColorFilter = '';
const mockSetColorFilter = jest.fn();

describe('<SortFilterToolbar />', () => {
  beforeEach(() => {
    render(
      <SortFilterToolbar
        sortMethod={mockSortMethod}
        setSortMethod={mockSetSortMethod}
        colorFilter={mockColorFilter}
        setColorFilter={mockSetColorFilter}
      />
    );
  });
  it('should render title and 2 selectors', () => {
    expect(screen.getByText('Image Filter')).toBeInTheDocument();
    expect(screen.getByTestId('selector-sort-method')).toBeInTheDocument();
    expect(screen.getByTestId('selector-filter-color')).toBeInTheDocument();
  });

  it('should change the sort method once the selected option changed', async () => {
    await userEvent.selectOptions(
      screen.getByTestId('selector-sort-method'),
      'latest'
    );
    expect(mockSetSortMethod).toHaveBeenCalledWith('latest');
  });

  it('should change the filter color once the selected option changed', async () => {
    await userEvent.selectOptions(
      screen.getByTestId('selector-filter-color'),
      'black'
    );
    expect(mockSetColorFilter).toHaveBeenCalledWith('black');
  });
});
