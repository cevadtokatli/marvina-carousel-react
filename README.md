# Marvina Carousel React

React integration for [Marvina Carousel.](https://github.com/cevadtokatli/marvina-carousel)

## NPM
```
npm install –-save-dev marvina-carousel-react
```

## Yarn
```
yarn add marvina-carousel-react --dev
```

## Installation
```
import React from 'react';
import * as Marvina from 'marvina-carousel-react';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Marvina.Solo>                
                    <Marvina.Element>
                        <img src="img1.jpg" />
                    </Marvina.Element>
                    <Marvina.Element>
                        <img src="img2.jpg" />
                    </Marvina.Element>
                    <Marvina.Element>
                        <img src="img3.jpg" />
                    </Marvina.Element>
                    <Marvina.Element>
                        <img src="img4.jpg" />
                    </Marvina.Element>
                    <Marvina.Element>
                        <img src="img5.jpg" />
                    </Marvina.Element>
                </Marvina.Solo>
            </div>
        );
    }
}
```

If you want to slide carousel as group, you can use `Group` component, instead of `Solo`;
```
	render() {
        return(
            <div>
                <Marvina.Group>                
                    // ...
                </Marvina.Group>
            </div>
        );
    }
```

Add the css file.
```
<link rel="stylesheet" href="/node_modules/marvina-carousel-react/dist/css/marvina-carousel.min.css" />
```

## Configuration
### Options
Option | Type | Default | Description
------ | ---- | ------- | -----------
timing | string | "ease" | Specifies the speed curve of an animation. Takes all the values CSS3 can take. *(like ease, linear, cubic-bezier, step)*
duration | number | 800 | Defines how long an animation should take to complete one cycle. *(as milliseconds)*
minImage | number | 1 | Minimum carousel element number that the carousel displays at once.
maxImage | number | 1 | Maximum carousel element number that the carousel displays at once.
minWidth | number | null | Specifies min width of an carousel element. *(as pixel)*
maxWidth | number | null | Specifies max width of an carousel element. *(as pixel)*
height | number | null | Sets height value according to width. *(as percent)*
space | number | 0 | Specifies the space between the carousel elements. *(as pixel)*
touchMove | boolean | true | Enables slide transitive with touch.
list | boolean | true | Displays a list at the bottom of the carousel.
[asList](#as-list) | string \| HTMLUListElement \| HTMLOListElement* | null | Declares the given list as the carousel list.
arrows | boolean | true | Displays right and left arrows to change the index.
asPrevArrow | string \| HTMLElement* | null | Declares the given element as the prev arrow.
asNextArrow | string \| HTMLElement* | null | Declares the given element as the next arrow.
autoPlay | boolean | false | Enables auto play of slides.
autoPlaySpeed | number | 5000 | Sets auto play interval. *(as milliseconds)*

<span style="font-size:.9rem;">*: You can give an HTML element or a CSS selector (like `#carousel`, `.container > div:first-child`)</span>

#### As List
You can convert an HTML list element to a carousel list that shows the current index and works as a pager. 
* It can be a `ul` or `ol` element.
* It can be placed anywhere in the `body`.
* List is updated when the current index is changed.
* Assigns `mc-active` class to list element that holds the current index.

### Events
Event | Description
----- | -----------
change | Fires when index changes.
totalIndex | Fires when total number of indexes change.
touchStart | Fires when touching starts.
touchEnd | Fires when touching ends.
play | Fires when autoplay starts.
stop | Fires when autoplay stops.
destroy | Fires when the carousel is destroyed.
```
    componentDidMount() {
        this.carosuel.el.addEventListener('change', () => {
            console.log('changes');
        });
    }

    render() {
        return(
            <div>
                <Marvina.Group ref={node => this.carousel = node}>                
                    // ...
                </Marvina.Group>
            </div>
        );
    }
```

### Methods
Method | Params | Return | Description
------ | ------ | ------ | -----------
prev | | Promise\<boolean> | Triggers previous image. Returns `false` if the carousel is in animation.
next | | Promise\<boolean> | Triggers next image. Returns `false` if the carousel is in animation.
play | | void | Starts autoplay.
stop | | void | Stops autoplay.
toggle | | void | Toggles autoplay.
destroy | | void | Destroys the carousel.
getIndex | | number | Returns index.
setIndex | index: number | Promise\<boolean> | Sets index and animates the carousel. Returns `false` if the carousel is in animation.
getTotal | | number | Returns total number of carousel elements.
getTotalIndex | | number | Returns total index.
getTiming | | string | Returns timing value.
setTiming | timing: string | void | Sets timing value.
getDuration | | number | Returns duration.
setDuration | duration: number | void | Sets duration.
getAutoPlaySpeed | | number | Returns auto play speed.
setAutoPlaySpeed | speed: number | void | Sets auto play speed.

<span style="font-size:.9rem;">*: You can give an HTML element or a CSS selector (like `#carousel`, `.container > div:first-child`)</span>

## IE Support
IE 10 is not supported and patches to fix problems will not be accepted.

## License
Marvina Carousel React is provided under the [MIT License](https://opensource.org/licenses/MIT).