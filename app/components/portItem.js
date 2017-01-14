import React from 'react';
import Slider  from 'react-slick';
import portData from './portData';
import SliderDisplay from './SliderDisplay'
import { Link } from 'react-router';

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

class portItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item1Count: 1,
      item2Count: 1,
      item3Count: 1,
      item4Count: 1
    },
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  // Match portfolio data with supplied link param
  getPortItem(data) {
    let itemData = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].url === this.props.routeParams.portItemName) {
        itemData = {
          currentItemData: data[i],
          nextLinkData: data[i+1]
        }
      }
    }
    return itemData;
  }

  checkNext(data) {
    let checkedItem = '';
    if (data === undefined) {
      checkedItem = portData[0];
    } else {
      checkedItem = data;
    }
    return checkedItem;
  }

  next(refToUpdate) {
    this.refs[refToUpdate].slickNext()
  }
  previous(refToUpdate) {
    this.refs[refToUpdate].slickPrev()
  }

  render() {
    let pageData = this.getPortItem(portData);

    let currentPortItem = pageData.currentItemData;
    let nextPortItem = this.checkNext(pageData.nextLinkData);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      swipe: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,

    }

    let masterCounter = (stateToUpdate) => {
      let handleCount = {
        afterChange: (index) => {
          this.setState({
            [stateToUpdate]: index + 1,
          });
        }
      }
      return handleCount;
    }

    let item1Tracker = masterCounter('item1Count');


    const settings1 = Object.assign({}, settings, masterCounter('item1Count'));
    const settings2 = Object.assign({}, settings, masterCounter('item2Count'));
    const settings3 = Object.assign({}, settings, masterCounter('item3Count'));
    const settings4 = Object.assign({}, settings, masterCounter('item4Count'));


      let portGallery = (item) => {
        let dataToRender = item;
        let imgMap = dataToRender.map((data,index) => {
          return(
            <div key={index}><img className="slide-img" src={data} /></div>
          )
        });
        return imgMap
      }


    return (
      <div>
        <section className="project-intro">
          <section className='flex-img-cont'>
            <img src={currentPortItem.intro.img} alt="" className="intro-img"/>
          </section>

          <h1 className="port-title">{currentPortItem.title}</h1>
          <p className="intro-copy">
            {currentPortItem.intro.text}
          </p>
          {
            currentPortItem.linkSrc &&
            <p className="intro-link">
              Github repo: <a href={currentPortItem.linkSrc}>Source Code</a>
            </p>
          }
        </section>
        <SliderDisplay

          prevButton={() => {
            this.previous('slider1')
          }}
          nextButton={() => {
            this.next('slider1')
          }}
          currentSlide={this.state.item1Count}
          totalSlides={currentPortItem.item1.imgs.length}
          slideCaption={currentPortItem.item1.caption}
        >

            <Slider  {...settings1} ref='slider1'>
              { portGallery(currentPortItem.item1.imgs)}
            </Slider>

        </SliderDisplay>


        {/* <section className="port-items">
          <section className="slick-container">
            <Slider  {...settings1} ref='slider1'>
              { portGallery(currentPortItem.item1.imgs)}
            </Slider>
          </section>

          <section className="slide-caption-container">
            <p className="slide-caption">{currentPortItem.item1.caption}</p>
            <p className="item-count">{this.state.item1Count}/{currentPortItem.item1.imgs.length}</p>
            <section className="slide-control">
              <div className='n-p-button bttn-room' onClick={() => {
                this.previous('slider1');
              }}><Fa iconClass='fa-angle-left'/></div>
              <div className='n-p-button' onClick={() => {
                this.next('slider1')
              }}><Fa iconClass='fa-angle-right'/></div>
            </section>
          </section>

        </section> */}


        {/* Checks the port data to see if other item set exisi then renders content */}
        {
          currentPortItem.item2 &&
          <SliderDisplay
            prevButton={() => {
              this.previous('slider2')
            }}
            nextButton={() => {
              this.next('slider2')
            }}
            currentSlide={this.state.item2Count}
            totalSlides={currentPortItem.item2.imgs.length}
            slideCaption={currentPortItem.item2.caption}
          >

              <Slider  {...settings2} ref='slider2'>
                { portGallery(currentPortItem.item2.imgs)}
              </Slider>

          </SliderDisplay>
        }


        {
          currentPortItem.item3 &&
          <SliderDisplay
            prevButton={() => {
              this.previous('slider3')
            }}
            nextButton={() => {
              this.next('slider3')
            }}
            currentSlide={this.state.item3Count}
            totalSlides={currentPortItem.item3.imgs.length}
            slideCaption={currentPortItem.item3.caption}
          >

              <Slider  {...settings3} ref='slider3'>
                { portGallery(currentPortItem.item3.imgs)}
              </Slider>

          </SliderDisplay>
        }


        {
          currentPortItem.item4 &&
          <SliderDisplay
            prevButton={() => {
              this.previous('slider4')
            }}
            nextButton={() => {
              this.next('slider4')
            }}
            currentSlide={this.state.item4Count}
            totalSlides={currentPortItem.item4.imgs.length}
            slideCaption={currentPortItem.item4.caption}
          >

              <Slider  {...settings4} ref='slider4'>
                { portGallery(currentPortItem.item4.imgs)}
              </Slider>

          </SliderDisplay>
        }


        <section className='next-port-item'>
          <p>Next</p>
          <p><Link to={`work/${nextPortItem.url}`} className='next-link'>{nextPortItem.title}</Link></p>

        </section>
      </div>
    )
  }
}

export default portItem;
