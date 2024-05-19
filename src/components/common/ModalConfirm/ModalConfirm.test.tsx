import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { ModalConfirm } from '.';

describe('SectionTitle component', () => {
  it('should render component correctly', () => {
    const { getByText } = render(
      <ModalConfirm title="Modal title" isOpen={true} loading={false} />
    );

    const component = getByText(/modal title/i);
    expect(component).toBeInTheDocument();
  });

  it('should click on submit button', async () => {
    const mockOkFn = jest.fn();

    const { findByTestId } = render(
      <ModalConfirm
        title="Modal title"
        isOpen={true}
        loading={false}
        onOk={mockOkFn}
      />
    );

    const buttonOk = await findByTestId('confirm-button');
    fireEvent.click(buttonOk);

    expect(mockOkFn).toBeCalled();
  });
});
