import {
    SKINCARES_ALL_REQUEST,
    SKINCARES_ALL_SUCCESS,
    SKINCARES_ALL_FAIL,
    SKINCARES_CREATE_REQUEST,
    SKINCARES_CREATE_SUCCESS,
    SKINCARES_CREATE_FAIL,
    SKINCARES_CREATE_RESET,
    SKINCARES_DELETE_REQUEST,
    SKINCARES_DELETE_SUCCESS,
    SKINCARES_DELETE_FAIL,
    SKINCARES_BYID_REQUEST,
    SKINCARES_BYID_SUCCESS,
    SKINCARES_BYID_FAIL,
    SKINCARES_UPDATE_REQUEST,
    SKINCARES_UPDATE_SUCCESS,
    SKINCARES_UPDATE_FAIL,
    SKINCARES_UPDATE_RESET

} from '../constants/skincaresConstants'



export const skincaresAllReducer = (state = { skincares: [] }, action) => {
    switch (action.type) {
          case  SKINCARES_ALL_REQUEST:
                return { loading: true }
          case SKINCARES_ALL_SUCCESS:
                return { loading: false, skincares: action.payload }
          case SKINCARES_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}


export const skincaresCreateReducer = (state = {}, action) => {
    switch (action.type) {
          case SKINCARES_CREATE_REQUEST:
                return { loading: true }
          case SKINCARES_CREATE_SUCCESS:
                return { loading: false, skincares: action.payload }
          case SKINCARES_CREATE_FAIL:
                return { loading: false, error: action.payload }
          case SKINCARES_CREATE_RESET:
                return {}
          default:
                return state
    }
}


export const skincareDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case SKINCARES_DELETE_REQUEST:
                  return { loading: true }
            case SKINCARES_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case SKINCARES_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}


export const skincareDetailsReducer = (state = { skincares: {} }, action) => {
      switch (action.type) {
            case SKINCARES_BYID_REQUEST:
                  return { ...state, loading: true }
            case SKINCARES_BYID_SUCCESS:
                  return { loading: false, skincares: action.payload }
            case SKINCARES_BYID_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const skincareUpdateRedudcer = (state = { skincares: {} }, action) => {
      switch (action.type) {
            case SKINCARES_UPDATE_REQUEST:
                  return {  loading: true }
            case SKINCARES_UPDATE_SUCCESS:
                  return { loading: false, success:true, skincares: action.payload }
            case SKINCARES_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case SKINCARES_UPDATE_RESET:
                  return {
                        skincares:{}
                  }
            default:
                  return state
      }
}

