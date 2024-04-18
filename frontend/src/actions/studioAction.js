import axios from 'axios'
import { STUDIO_INSERT_REQUEST, STUDIO_INSERT_SUCCESS, STUDIO_INSERT_FAIL, STUDIO_ALL_REQUEST, STUDIO_ALL_SUCCESS, STUDIO_ALL_FAIL, STUDIO_BYID_REQUEST, STUDIO_BYID_SUCCESS, STUDIO_BYID_FAIL, STUDIO_DELETE_REQUEST, STUDIO_DELETE_SUCCESS, STUDIO_DELETE_FAIL,STUDIO_UPDATE_REQUEST, STUDIO_UPDATE_SUCCESS, STUDIO_UPDATE_FAIL, STUDIO_UPDATE_RESET } from '../constants/studioConstant.js'

export const studioAdd = (studHallName, studSeats, studDes, studimg1, studimg2, studimg3) => async (dispatch) => {
    try {
        dispatch({
            type: STUDIO_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:6500/api/studios/addStudio', { studHallName, studSeats, studDes, studimg1, studimg2, studimg3 },
            config
        )

        dispatch({
            type: STUDIO_INSERT_SUCCESS,
            payload: data,
        })


        localStorage.setItem('studioInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: STUDIO_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const allStudios = () => async (dispatch) => {
    try {
          dispatch({
                type: STUDIO_ALL_REQUEST,
          })

          const { data } = await axios.get('http://localhost:6500/api/studios/')

          console.log(data)

          dispatch({
                type: STUDIO_ALL_SUCCESS,
                payload: data
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: STUDIO_ALL_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}

export const studioById = (id) => async (dispatch, getState) => {
    try {
          dispatch({
                type: STUDIO_BYID_REQUEST,
          })

          const { data } = await axios.get(`http://localhost:6500/api/studios/${id}`)

          dispatch({
                type: STUDIO_BYID_SUCCESS,
                payload: data
          })

    } catch (error) {
          dispatch({
                type: STUDIO_BYID_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const deletestudio = (id) => async (dispatch) => {
    try {
          dispatch({
                type: STUDIO_DELETE_REQUEST,
          })

          await axios.delete(`http://localhost:6500/api/studios/${id}`)

          dispatch({
                type: STUDIO_DELETE_SUCCESS,

          })
    } catch (error) {
          dispatch({
                type: STUDIO_DELETE_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const updateStudDetails = (studios) => async (dispatch) => {

      try {
            dispatch({
                  type: STUDIO_UPDATE_REQUEST,
            })

            const { data } = await axios.put(`http://localhost:6500/api/studios/${studios._id}`, studios)

            dispatch({
                  type: STUDIO_UPDATE_SUCCESS,
                  payload: data,
            })

      } catch (error) {
            dispatch({
                  type: STUDIO_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message
            })
      }

}

export const filterstudios = (searchkey) => async dispatch => {
      var filteredStudios;
      try {
            dispatch({
            type: STUDIO_ALL_REQUEST,
            })

            const  response = await axios.get('http://localhost:6500/api/studios/')
            filteredStudios = response.data.filter(studios => studios.studHallName.toLowerCase().includes(searchkey))
            dispatch({
                type: STUDIO_ALL_SUCCESS,
                payload: filteredStudios
            })

      } catch (error) {
            console.log(error)
                 dispatch({
                  type: STUDIO_ALL_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,

            })

      }

  }