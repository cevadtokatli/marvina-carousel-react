import React from 'react'
import Carousel from './Carousel'
import Util from './util'

class Solo extends React.Component
    constructor: (props) ->
        super props
        @calculateResize = @calculateResize.bind @
        @carousel = props.carousel
        @space = props.space
        @state =
            width: 0
            cloneElements: []

    componentDidMount: ->
        @carousel.initCarousel()
        window.addEventListener 'resize', @calculateResize, true
        @calculateResize()

    componentWillReceiveProps: (np) ->
        @calculateResize(true, np) unless Util.eqArrays(np.children, @props.children)

    componentDidUpdate: (op, os) ->
        @carousel.elements = @el.querySelectorAll '.mc-carousel-element:not(.mc-carousel-clone-element)'
        @carousel.cloneElements = @el.querySelectorAll '.mc-carousel-clone-element'

    componentWillUnmount: ->
        window.removeEventListener 'resize', @calculateResize, true

    calculateResize: (skip, $) ->
        children = if skip != true then @props.children else $.children

        @carousel.calculateResize children.length

        cloneCount = if @carousel.imageCount > 1 then @carousel.imageCount - 1 else 0
        cloneElements = []
        for i in [0...cloneCount]
            cloneElements.push React.cloneElement(children[i], {space:@space, width:@carousel.width, clone:true})
        
        @setState
            width: @carousel.width
            cloneElements: cloneElements

    render: ->
        <div className="mc-container" ref={(node) => @el = node}>
            { React.Children.map(@props.children, (child) => (
                React.cloneElement(child, {
                    space: @space,
                    width: @state.width
                })
            ))}
            { @state.cloneElements.map((Clone) => Clone)}
        </div>
      

export default Carousel(Solo, false)