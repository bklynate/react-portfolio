import React from 'react';

class PortIntro extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <section className="project-intro">
        <section className='flex-img-cont'>
          <img src={this.props.introImg} alt="" className="intro-img"/>
        </section>

        <h1 className="port-title">{this.props.itemTitle}</h1>
        <p className="intro-copy">
          {this.props.introText}
        </p>
        {
          this.props.linkSrc &&
          <p className="intro-link">
            Github repo: <a href={this.props.linkSrc}>Source Code</a>
          </p>
        }
      </section>
    )
  }
}
PortIntro.propTypes = {
  introImg: React.PropTypes.string.isRequired,
  itemTitle: React.PropTypes.string.isRequired,
  introText: React.PropTypes.string.isRequired,
  linkSrc: React.PropTypes.string.isRequired
}

PortIntro.defaultProps = {
  linkSrc: ""
}


export default PortIntro;
