import { types } from "../types/types"

export const setMode = (mode) => {

    return {
      type: types.setMode,
      payload: {
        ...mode
      },
    }
  
  }

  export const setSearch = (search) => {

    return {
      type: types.setSearch,
      payload: search,
    }
    }

  export const setModal = (modal) => {

    return {
      type: types.modalStore,
      payload: modal,
    }
  
  }

  export const modalAction = (modal) => {

    return {
      type: types.modalCita,
      payload: modal,
    }
  
  }