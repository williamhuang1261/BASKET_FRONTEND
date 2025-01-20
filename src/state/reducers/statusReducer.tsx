export interface StatusProp {
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
  group: "CHANGE"
  type: "ERROR_STATUS";
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
  type: "SUCCESS_STATUS";
  newMessage: string;
}

interface showSuccess {
  group: "CHANGE";
  type: "SUCCESS_DISPLAY";
  show: boolean;
}

export type StatusAction =
  | SetError
  | ShowError
  | SetLoadStatus
  | SetSuccess
  | showSuccess;

/**
 * @description Reducer function to manage application status state
 * @summary Handles status changes including error states, messages, and display settings
 * @param {StatusProp} state - Current status state
 * @param {StatusAction} action - Action object containing group, type and payload
 * @returns {StatusProp} Updated status state
 */
const statusReducer = (state: StatusProp, action: StatusAction): StatusProp => {
  switch (action.group) {
    case "CHANGE":
      switch (action.type) {
        case "ERROR_STATUS":
          return {
            ...state,
            error: {
              ...state.error,
              errorCode: action.errorCode ?? state.error.errorCode,
              message: action.message ?? state.error.message,
            },
          };
        case "ERROR_DISPLAY":
          return {
            ...state,
            error: {
              ...state.error,
              show: action.show,
              hideHome: action.hideHome ?? state.error.hideHome,
            },
          };
        case "LOADING_STATUS": {
          return {
            ...state,
            loading: action.loading,
          };
        }
        case "SUCCESS_STATUS": {
          return {
            ...state,
            succes: {
              ...state.succes,
              message: action.newMessage,
            },
          };
        }
        case "SUCCESS_DISPLAY": {
          return {
            ...state,
            succes: {
              ...state.succes,
              show: action.show,
            },
          };
        }
        default:
          return state;
      }
    default:
      return state;
  }
};

export default statusReducer;
