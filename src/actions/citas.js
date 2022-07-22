import { types } from "../types/types"
import { url, getDataPaginate } from "../helpers/api"
import axios from 'axios'

export const setCitas = (citas) => {

    return {
      type: types.setCitas,
      payload: citas,
      }
  
  }