export interface ICConfirm {
  show?: boolean;
  proceed?: (confirm: boolean) => void;
  title?: string;
  content?: string;
  cancelText?: string;
  okText?: string;
}
