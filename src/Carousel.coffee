import React from 'react'
import PropTypes from 'prop-types'
import MarvinaCarousel from 'marvina-carousel'

export default (Component, group) =>
    return class Carousel extends React.Component
        constructor: (props) ->
            super props
            @space = @props.space
            @state = {}

        componentDidMount: ->
            carousel = new MarvinaCarousel
                el: @el
                timing: @props.timing
                duration: @props.duration
                group: group
                minImage: @props.minImage
                maxImage: @props.maxImage
                minWidth: @props.minWidth
                maxWidth: @props.maxWidth
                height: @props.height
                space: @props.space
                touchMove: @props.touchMove
                list: @props.list
                asList: @props.asList
                arrows: @props.arrows
                asPrevArrow: @props.asPrevArrow
                asNextArrow: @props.asNextArrow
                autoPlay: @props.autoPlay
                autoPlaySpeed: @props.autoPlaySpeed
                init: false
            @setState {carousel}

        componentWillReceiveProps: (np) ->
            @setTiming(np.timing) unless np.timing == @props.timing
            @setDuration(np.duration) unless np.duration == @props.duration
            unless np.autoPlay == @props.autoPlay
                if np.autoPlay
                    @play()
                else
                    @stop()
            @setAutoPlaySpeed(np.autoPlaySpeed) unless np.autoPlaySpeed == @props.autoPlaySpeed

        componentWillUnmount: ->
            @destroy()

        # carousel methods
        prev: ->
            @state.carousel.prev()

        next: ->
            @state.carousel.next()

        play: ->
            @state.carousel.play()

        stop: ->
            @state.carousel.stop()

        toggle: ->
            @state.carousel.toggle()

        destroy: ->
            @state.carousel.destroy()

        getIndex: ->
            @state.carousel.getIndex()

        setIndex: (index) ->
            @state.carousel.setIndex index

        getTotal: ->
            @state.carousel.getTotal()

        getTotalIndex: ->
            @state.carousel.getTotalIndex()

        getTiming: ->
            @state.carousel.getTiming()

        setTiming: (timing) ->
            @state.carousel.setTiming timing

        getDuration: ->
            @state.carousel.getDuration()

        setDuration: (duration) ->
            @state.carousel.setDuration duration

        getAutoPlaySpeed: ->
            @state.carousel.getAutoPlaySpeed()

        setAutoPlaySpeed: (speed) ->
            @state.carousel.setAutoPlaySpeed speed

        render: ->
            <div className="mc" ref={(node) => @el = node}>
                <div className="mc-carousel">
                    { @state.carousel && 
                        <Component 
                            carousel={@state.carousel} 
                            space={@space}>
                            {@props.children}
                        </Component>
                    }
                </div>
            </div>

    Carousel.propTypes =
        timing: PropTypes.string
        duration: PropTypes.number
        minImage: PropTypes.number
        maxImage: PropTypes.number
        minWidth: PropTypes.number
        maxWidth: PropTypes.number
        height: PropTypes.number
        space: PropTypes.number
        touchMove: PropTypes.bool
        list: PropTypes.bool
        asList: PropTypes.oneOfType([
            PropTypes.instanceOf(Element)
            PropTypes.string
        ])
        arrows: PropTypes.bool
        asPrevArrow: PropTypes.oneOfType([
            PropTypes.instanceOf(Element)
            PropTypes.string
        ])
        asNextArrow: PropTypes.oneOfType([
            PropTypes.instanceOf(Element)
            PropTypes.string
        ])
        autoPlay: PropTypes.bool
        autoPlaySpeed: PropTypes.number

    Carousel.defaultProps =
        timing: 'ease'
        duration: 800
        minImage: 1
        maxImage: 1
        space: 0
        touchMove: true
        list: true
        arrows: true
        autoPlay: false
        autoPlaySpeed: 5000