interface IModalConfirm {
  onOk?(): void;
  onCancel?(): void;
  loading: boolean;
  isOpen: boolean;
  title: string;
}

export type { IModalConfirm };
