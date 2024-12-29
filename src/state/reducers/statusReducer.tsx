export interface StatusProp {
  show: boolean;
  error: boolean;
  errorCode: number | string;
  message: string;
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
  show: boolean
}

export type StatusAction = SetStatus | showStatus;

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
            show: action.show
          }
        default:
          return state
      }
    default:
      return state
  }
}


export default statusReducer;
