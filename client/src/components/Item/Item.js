import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Line as LineChart } from 'react-chartjs'

import { Button, Spinner } from '../UI'
import styles from './Item.scss'

class Item extends Component {
  render() {
    const { dataSet, loading } = this.props
    console.log(dataSet[0])
    const data = {
      labels: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'r',
        's',
        't',
        'q'
      ],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: dataSet[0]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: dataSet[1]
        },
        {
          label: 'My Third dataset',
          fillColor: 'rgba(90,112,123,0.2)',
          strokeColor: 'rgba(90,112,123,1)',
          pointColor: 'rgba(90,112,123,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(90,112,123,1)',
          data: dataSet[2]
        }
      ]
    }
    return (
      <Grid container className={styles.Item}>
        <Grid item xs={12}>
          <Button text="Cancel" delete onButtonClick={() => alert('back')} />
          <Button text="Cancel" select onButtonClick={() => alert('back')} />
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <Spinner />
          ) : (
            <LineChart data={data} width="600" height="250" />
          )}
        </Grid>
      </Grid>
    )
  }
}

Item.propTypes = {
  dataSet: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool
}

export default Item
