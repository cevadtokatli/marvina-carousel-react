import React from 'react'
import Carousel from './Carousel'
import Wrapper from './Wrapper'
import Element from './Element'
import Util from './util'

class Group extends React.Component
    constructor: (props) ->
        super props
        @calculateResize = @calculateResize.bind @
        @carousel = props.carousel
        @space = props.space
        @state =
            width: 0
            wrappers: []

    componentDidMount: ->
        @carousel.initCarousel()
        window.addEventListener 'resize', @calculateResize, true
        @calculateResize()

    componentWillReceiveProps: (np) ->
        @calculateResize(true, np) unless Util.eqArrays(np.children, @props.children)

    componentWillUnmount: ->
        window.removeEventListener 'resize', @calculateResize, true

    calculateResize: (skip, $) ->
        children = if skip != true then @props.children else $.children

        totalIndex = @carousel.totalIndex
        @carousel.total = children.length
        @carousel.calculateResize()

        wrappers = []
        for i in [0...(@carousel.totalIndex)]
            els = []
            for n in [0...(@carousel.imageCount)]
                index = (i * @carousel.imageCount) + n
                if children[index]
                    els.push React.cloneElement(children[index], {space:@space, width:@carousel.width})
                else
                    els.push(<Element key={index} space={@space} width={@carousel.width} spaceEl={true} />)
            wrappers.push(<Wrapper space={@space}>{els}</Wrapper>)

        @setState
            width: @carousel.width
            wrappers: wrappers

    render: ->
        <div className="mc-container" ref={(node) => @el = node}>
            {@state.wrappers}
        </div>

export default Carousel(Group, true)