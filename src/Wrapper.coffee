import React from 'react'
import PropTypes from 'prop-types'

export default class Wrapper extends React.Component
    render: ->
        <div className="mc-wrapper" style={{marginRight:"#{@props.space}px"}}>
            {@props.children}
        </div>

Wrapper.propTypes =
    space: PropTypes.number.isRequired