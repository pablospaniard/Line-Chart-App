import { connect } from 'react-redux'
import { Layout } from '../../components'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const { dataSet, err, loading, src } = state.data
  return { dataSet, err, loading, src }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actions.fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
