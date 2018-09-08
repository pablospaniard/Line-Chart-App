import axios from 'axios'

import * as constants from './constants'

const fetchDataStart = () => ({
  type: constants.DATA_FETCH_START
})

const fetchDataSuccess = data => ({
  type: constants.DATA_FETCH_SUCCESS,
  payload: data
})

const fetchDataFail = err => {
  return {
    type: constants.DATA_FETCH_FAIL,
    payload: err
  }
}

export const fetchData = () => dispatch => {
  dispatch(fetchDataStart())
  axios('/data')
    .then(res => dispatch(fetchDataSuccess({ data: res.data.data })))
    .catch(err => dispatch(fetchDataFail(err)))
}
