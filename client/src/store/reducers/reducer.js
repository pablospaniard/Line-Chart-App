import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: null,
  dataSet: []
}

const dataReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.DATA_FETCH_START:
      return { ...state, loading: true }
    case constants.DATA_FETCH_SUCCESS:
      return { ...state, loading: false, dataSet: action.payload.data }
    case constants.DATA_FETCH_FAIL:
      return { ...state, loading: false, err: action.payload }
    default:
      return state
  }
}

export default dataReducer
