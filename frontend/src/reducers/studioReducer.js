import { STUDIO_INSERT_REQUEST, STUDIO_INSERT_SUCCESS, STUDIO_INSERT_FAIL, STUDIO_ALL_REQUEST, STUDIO_ALL_SUCCESS, STUDIO_ALL_FAIL, STUDIO_BYID_REQUEST, STUDIO_BYID_SUCCESS, STUDIO_BYID_FAIL, STUDIO_DELETE_REQUEST, STUDIO_DELETE_SUCCESS, STUDIO_DELETE_FAIL, STUDIO_UPDATE_REQUEST, STUDIO_UPDATE_SUCCESS, STUDIO_UPDATE_FAIL, STUDIO_UPDATE_RESET } from '../constants/studioConstant.js'

export const studioInsertReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDIO_INSERT_REQUEST:
            return { loading: true }
        case STUDIO_INSERT_SUCCESS:
            return { loading: false, studioInfo: action.payload }
        case STUDIO_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const studAllReducer = (state = { studios: [] }, action) => {
    switch (action.type) {
          case  STUDIO_ALL_REQUEST:
                return { loading: true }
          case STUDIO_ALL_SUCCESS:
                return { loading: false, studios: action.payload }
          case STUDIO_ALL_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}

export const studByIdReducer = (state = { studios: {} }, action) => {
    switch (action.type) {
          case STUDIO_BYID_REQUEST:
                return { ...state, loading: true }
          case STUDIO_BYID_SUCCESS:
                return { loading: false, studios: action.payload }
          case STUDIO_BYID_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}

export const studDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case STUDIO_DELETE_REQUEST:
                  return { loading: true }
            case STUDIO_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case STUDIO_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const studUpdateReducer = (state = { studd: {} }, action) => {

      switch (action.type){
            case STUDIO_UPDATE_REQUEST:
                  return { loading: true }
            case STUDIO_UPDATE_SUCCESS:
                  return { loading: false, success:true, studios:action.payload }
            case STUDIO_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case STUDIO_UPDATE_RESET:
                  return{
                        studios: {}
                  }
            default:
                  return state
      }
}