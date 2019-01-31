import React from 'react'
import PropTypes from 'prop-types'

export default class Element extends React.Component
    render: ->
        <div className={"mc-carousel-element#{if @props.clone then ' mc-carousel-clone-element' else ''}#{if @props.spaceEl then ' mc-carousel-space-element' else ''}"} style={{marginRight:"#{@props.space}px", width:"#{@props.width}px"}}>
            {@props.children}
        </div>

Element.propTypes =
    space: PropTypes.number.isRequired
    clone: PropTypes.bool
    spaceEl: PropTypes.bool

Element.defaultProps =
    clone: false
    spaceEl: false