import { types } from "../types/types"

export const setMode = (mode) => {

    return {
      type: types.setMode,
      payload: {
        ...mode
      },
    }
  
  }

  export const setModal = (modal) => {

    return {
      type: types.modalStore,
      payload: modal,
    }
  
  }