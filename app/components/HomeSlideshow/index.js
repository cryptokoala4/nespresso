import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import '!style-loader!css-loader!sass-loader!./slideshow.css';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import StyledButton from 'components/Button/StyledButton'
import Slideimage1 from './slideimage1.jpg';
import Slideimage2 from './slideimage2.jpg';
import Slideimage3 from './slideimage3.jpg';
import Img from './Img';

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

// fixme
const slideshowButton = () => (
  <div className="image-gallery-btn-wrapper">
    <button type="button" className="image-gallery-slider-button">Click Me!</button>
  </div>
);

class HomeSlideshow extends React.Component {

  constructor() {
    super();
    this.state = {
      showNav: true,
      showBullets: true,
    };

    this.images = [
      {
        original: Slideimage1,
        thumbnail: Slideimage1,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description:
          <FormattedMessage {...messages.image1}>
          </FormattedMessage>,
      },
      {
        original: Slideimage2,
        thumbnail: Slideimage2,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: <FormattedMessage {...messages.image2} />,
      },
      {
        original: Slideimage3,
        thumbnail: Slideimage3,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: <FormattedMessage {...messages.image3} />,
      }
    ]
  };

  // handleImageLoad(event) {
  //   console.log('Image loaded ', event.target)
  // };

  render() {

    // fixme
    const images = [
      {
        original: <Img src={Slideimage1}/>,
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        description: <FormattedMessage {...messages.image1} />,
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        description: <FormattedMessage {...messages.image2} />,
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
        description: <FormattedMessage {...messages.image3} />,
      }
    ];

    return (
      <section className='app'>
        <ImageGallery
          infinite={true}
          autoPlay={false}
          showPlayButton={false}
          items={this.images}
          slideDuration={1000}
          slideInterval={10000}
          showBullets={this.state.showBullets}
          showThumbnails={false}
          showFullscreenButton={false}
          onImageLoad={this.handleImageLoad}
        />
      </section>
    );
  }
}

// fixme
// renderCustomControls={this._renderButton.bind(this)}
export default HomeSlideshow;
