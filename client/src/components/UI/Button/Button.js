import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'

const Button = props => {
  const { first, second, third, onButtonClick, disabled, text } = props
  return (
    <button
      type="button"
      className={`${first ? styles.Button_First : null} ${
        second ? styles.Button_Second : null
      } ${third ? styles.Button_Third : null}`}
      onClick={onButtonClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  first: PropTypes.bool,
  second: PropTypes.bool,
  third: PropTypes.bool,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func
}

export default Button
