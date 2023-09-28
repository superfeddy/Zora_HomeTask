import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBox from '../SearchBox';

const mockKeyword = 'keyword';
const mockSetKeyword = jest.fn();

describe('<SearchBox />', () => {
  const placeholder = 'Keyword here...';
  beforeEach(() => {
    render(<SearchBox keyword={mockKeyword} setKeyword={mockSetKeyword} />);
  });
  it('should render input element on the page', () => {
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should change the input element', async () => {
    const extraKeyword = 'T';
    await userEvent.type(
      screen.getByPlaceholderText(placeholder),
      extraKeyword
    );
    expect(mockSetKeyword).toHaveBeenCalledWith(mockKeyword + extraKeyword);
  });
});
