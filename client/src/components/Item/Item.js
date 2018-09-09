import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Line as LineChart } from 'react-chartjs-2'
import { linearRegression } from 'simple-statistics'

import { Spinner } from '../UI'
import styles from './Item.scss'

class Item extends Component {
  state = {
    firstLine: null,
    secondLine: null,
    thirdLine: null,
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
    ]
  }

  onChartButtonClick = () => {
    const { dataSet } = this.props
    const { labels, firstLine } = this.state
    const array = []
    const newArray = [[], [], []]

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < labels.length; i++) {
        array.push([i, dataSet[0][i]])
        newArray[j].push(Object.values(linearRegression(array))[1])
      }
    }

    if (Object.values(linearRegression(array)) && firstLine === null) {
      this.setState({
        firstLine: newArray[0],
        secondLine: newArray[1],
        thirdLine: newArray[2]
      })
    }
  }

  render() {
    const { dataSet, loading } = this.props
    const { labels } = this.state
    const data = {
      labels,
      datasets: [
        {
          label: 'First dataset',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,0.4)',
          showLine: false,
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: dataSet[0]
        },
        {
          label: 'Second dataset',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(192,192,75,0.4)',
          showLine: false,
          borderColor: 'rgba(192,192,75,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,192,75,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,192,75,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: dataSet[1]
        },
        {
          label: 'Third dataset',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(192,75,192,0.4)',
          showLine: false,
          borderColor: 'rgba(192,75,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,75,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,75,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: dataSet[2]
        },
        {
          label: 'First regression',
          fill: false,
          hidden: true,
          lineTension: 0,
          backgroundColor: 'rgba(219,242,242,0.4)',
          borderColor: 'rgba(219,242,242, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(219,242,242, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(219,242,242, 1)',
          pointHoverBorderColor: 'rgba(219,242,242,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          spanGaps: true,
          data: this.state.firstLine
        },
        {
          label: 'Second regression',
          fill: false,
          hidden: true,
          lineTension: 0,
          backgroundColor: 'rgba(242,242,219,0.4)',
          borderColor: 'rgba(242,242,219, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(242,242,219, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(242,242,219, 1)',
          pointHoverBorderColor: 'rgba(242,242,219,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          spanGaps: true,
          data: this.state.secondLine
        },
        {
          label: 'Third regression',
          fill: false,
          hidden: true,
          lineTension: 0,
          backgroundColor: 'rgba(242,219,242,0.4)',
          borderColor: 'rgba(242,219,242,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(242,219,242,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(242,219,242,1)',
          pointHoverBorderColor: 'rgba(242,219,242,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          spanGaps: true,
          data: this.state.thirdLine
        }
      ]
    }

    const chartLegend = {
      position: 'bottom'
    }

    const chartOptions = {
      position: 'bottom',
      tooltips: { mode: 'label' },
      elements: { line: { fill: false } },
      onClick: this.onChartButtonClick
    }

    return (
      <Grid container className={styles.Item}>
        <Grid item xs={6} className={styles.Chart}>
          {loading ? (
            <Spinner />
          ) : (
            <LineChart
              data={data}
              legend={chartLegend}
              options={chartOptions}
            />
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
