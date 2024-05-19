import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SectionTitle } from '.';

describe('SectionTitle component', () => {
  it('should render component correctly', () => {
    render(<SectionTitle title="Component title" />);
    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/component title/i);
  });
});
