import { types } from "../types/types"

export const setMode = (mode) => {

    return {
      type: types.setMode,
      payload: {
        ...mode
      },
    }
  
  }