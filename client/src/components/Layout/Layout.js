import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Item } from '../'

class Layout extends Component {
  componentWillMount = () => {
    this.props.fetchData()
  }

  render() {
    const { dataSet, err, loading } = this.props
    return (
      <Grid container>
        <Grid item xs={12}>
          <Item dataSet={dataSet} error={err} loading={loading} />
        </Grid>
      </Grid>
    )
  }
}

Layout.propTypes = {
  fetchData: PropTypes.func,
  dataSet: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  err: PropTypes.object,
  loading: PropTypes.bool
}

export default Layout
