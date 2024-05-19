import { Button, Modal } from 'antd';
import { IModalConfirm } from './ModalConfirm.interface';

const ModalConfirm = ({
  onOk,
  onCancel,
  isOpen,
  title,
  loading,
}: IModalConfirm) => (
  <Modal
    title={title}
    open={isOpen}
    onCancel={onCancel && onCancel}
    destroyOnClose
    footer={(_, { CancelBtn }) => (
      <>
        <CancelBtn />
        <Button
          loading={loading}
          type="primary"
          onClick={onOk}
          data-testid="confirm-button"
        >
          Confirm
        </Button>
      </>
    )}
  />
);

export { ModalConfirm };
