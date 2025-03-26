interface AppState {
  modal: {
    isOpen: boolean;
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
  };
}

interface AppAction {
  type: string;
  payload?: {
    text?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  };
}

const initialStateApp: AppState = {
  modal: {
    isOpen: false,
    text: "",
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (
  state = initialStateApp,
  action: AppAction
): AppState => {
  switch (action.type) {
    case "ON_OPEN_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true,
        },
      };

    case "CLOSE_MODAL":
      return initialStateApp;

    default:
      return state;
  }
};
