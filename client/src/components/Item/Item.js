import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Button } from '../UI'
import styles from './Item.scss'

class Item extends Component {
  render() {
    const { data } = this.props
    return (
      <Grid container className={styles.Item}>
        <Grid item xs={12}>
          <Button text="Cancel" delete onButtonClick={() => alert('back')} />
          <Button text="Cancel" select onButtonClick={() => alert('back')} />
        </Grid>
        <Grid item xs={12}>
          Graphic
        </Grid>
      </Grid>
    )
  }
}

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onBackClick: PropTypes.func,
  src: PropTypes.string
}

export default Item
