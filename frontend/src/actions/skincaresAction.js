import axios from 'axios'
import {
    SKINCARES_ALL_REQUEST,
    SKINCARES_ALL_SUCCESS,
    SKINCARES_ALL_FAIL,
    SKINCARES_CREATE_REQUEST,
    SKINCARES_CREATE_SUCCESS,
    SKINCARES_CREATE_FAIL,
    SKINCARES_DELETE_REQUEST,
    SKINCARES_DELETE_SUCCESS,
    SKINCARES_DELETE_FAIL,
    SKINCARES_BYID_REQUEST,
    SKINCARES_BYID_SUCCESS,
    SKINCARES_BYID_FAIL,
    SKINCARES_UPDATE_REQUEST,
    SKINCARES_UPDATE_SUCCESS,
    SKINCARES_UPDATE_FAIL

    
} from '../constants/skincaresConstants'


export const addSkincare = (name,category,price,description,image) => async (dispatch, getState) => {
      try {
        dispatch({
          type: SKINCARES_CREATE_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
    
        const { data } = await axios.post(`http://localhost:6500/api/skincare/addskincare`, {name,category,price,description,image},config)
    
        dispatch({
          type: SKINCARES_CREATE_SUCCESS,
          payload: data,
        })

        localStorage.setItem('SkinCareInfo', JSON.stringify(data))
      } catch (error) {
        dispatch({
          type: SKINCARES_CREATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
  



export const allSkincares = () => async (dispatch) => {
    try {
          dispatch({
                type: SKINCARES_ALL_REQUEST,
          })

          const { data } = await axios.get('http://localhost:6500/api/skincare/')

          console.log(data)

          dispatch({
                type: SKINCARES_ALL_SUCCESS,
                payload: data
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: SKINCARES_ALL_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}




  export const deleteSkincare = (id) => async (dispatch) => {
    try {
          dispatch({
                type: SKINCARES_DELETE_REQUEST,
          })

          await axios.delete(`http://localhost:6500/api/skincare/${id}`)

          dispatch({
                type: SKINCARES_DELETE_SUCCESS,

          })
    } catch (error) {
          dispatch({
                type: SKINCARES_DELETE_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const getSkincareDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: SKINCARES_BYID_REQUEST,
            })

            const { data } = await axios.get(`http://localhost:6500/api/skincare/${id}`)

            dispatch({
                  type: SKINCARES_BYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: SKINCARES_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const updateSkincareDetails = (skincare) => async (dispatch) => {
      try {
          dispatch({
              type: SKINCARES_UPDATE_REQUEST,
          });
  
          const { data } = await axios.put(`http://localhost:6500/api/skincare/${skincare._id}`, skincare); // Use await with axios.put to wait for the response
  
          dispatch({
              type: SKINCARES_UPDATE_SUCCESS,
              payload: data,
          });
      } catch (error) {
          dispatch({
              type: SKINCARES_UPDATE_FAIL,
              payload: error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
          });
      }
  };

export const filterSkincares = (searchkey) => async dispatch => {

      var filteredSkincares;

      try {
            dispatch({
                  type: SKINCARES_ALL_REQUEST,
            })
  
            const  response = await axios.get('http://localhost:6500/api/skincare/')
            filteredSkincares = response.data.filter(skincare => skincare.name.toLowerCase().includes(searchkey))

            dispatch({
                  type: SKINCARES_ALL_SUCCESS,
                  payload: filteredSkincares
            })
      } catch (error) {
            console.log(error)
  
            dispatch({
                  type: SKINCARES_ALL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
  
            })
      }
  }