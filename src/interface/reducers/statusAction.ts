interface StatusProp {
  error: {
    show: boolean;
    errorCode: number | string;
    message: string;
    hideHome: boolean;
  };
  succes: {
    show: boolean;
    message: string;
  };
  loading: boolean;
}

interface SetError {
  group: "CHANGE";
  type: "ERROR_DETAILS";
  errorCode?: number | string;
  message?: string;
}

interface ShowError {
  group: "CHANGE";
  type: "ERROR_DISPLAY";
  show: boolean;
  hideHome?: boolean;
}

interface SetLoadStatus {
  group: "CHANGE";
  type: "LOADING_STATUS";
  loading: boolean;
}

interface SetSuccess {
  group: "CHANGE";
  type: "SUCCESS_DETAILS";
  newMessage: string;
}

interface showSuccess {
  group: "CHANGE";
  type: "SUCCESS_DISPLAY";
  show: boolean;
}

type StatusAction =
  | SetError
  | ShowError
  | SetLoadStatus
  | SetSuccess
  | showSuccess;

export type { StatusProp, StatusAction };
