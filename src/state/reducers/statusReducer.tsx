export interface StatusProp {
  show: boolean;
  error: boolean;
  errorCode: number | string;
  message: string;
  hideHome: boolean
}

interface SetStatus {
  group: 'CHANGE',
  type: 'STATUS',
  newError?: boolean,
  newErrorCode?: number | string,
  newMessage?: string
}

interface showStatus {
  group: 'CHANGE',
  type: 'DISPLAY',
  show: boolean,
  hideHome?: boolean
}

export type StatusAction = SetStatus | showStatus;

/**
 * @description Reducer function to manage application status state
 * @summary Handles status changes including error states, messages, and display settings
 * @param {StatusProp} state - Current status state
 * @param {StatusAction} action - Action object containing group, type and payload
 * @returns {StatusProp} Updated status state
 */
const statusReducer = (state: StatusProp, action: StatusAction): StatusProp => {
  switch (action.group) {
    case 'CHANGE':
      switch(action.type) {
        case 'STATUS':
          return {
            ...state,
            error: action.newError ?? state.error,
            errorCode: action.newErrorCode ?? state.errorCode,
            message: action.newMessage ?? state.message
          }
        case 'DISPLAY':
          return {
            ...state,
            show: action.show,
            hideHome: action.hideHome ?? state.hideHome
          }
        default:
          return state
      }
    default:
      return state
  }
}


export default statusReducer;
