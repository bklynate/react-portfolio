import React from 'react';
import { Link } from 'react-router'

let Bars = <i className="fa fa-bars" aria-hidden="true"></i>;
let CloseIcon = <i className="fa fa-times" aria-hidden="true"></i>;

const Fa = (props) => {
  return <i className={props.icon} aria-hidden="true"></i>
};

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.navClick = this.navClick.bind(this)
    this.state = {
      buttonStyle: Bars,
      navVis: "nav-hidden"
    }
  }
  navClick(){
    if (this.state.buttonStyle === Bars ) {
      this.setState({
        buttonStyle: CloseIcon,
        // navVis:
      })
    } else {
      this.setState({
        buttonStyle: Bars,
        // navVis: " "
      })
    }
  }

  render() {
    return (
      <div className="site-root">
        <header>
          <section className="logo">
            <Link to="/">Christopher Lindor</Link>
          </section>
          <nav>
            <button className="nav-controller" onClick={this.navClick}>
              {this.state.buttonStyle}
            </button>
            <ul className="nav-links">
              <li>
                <Link to="/work">Design</Link>
              </li>
              <li>
                <Link to="/work">Development</Link>
              </li>
              <li>
                <Link to="/photo">Photography</Link>
              </li>
            </ul>
            <section className="social-section">
              <a href="#"><Fa icon="fa fa-instagram" /></a>
              <a href="#"><Fa icon="fa fa-github" /></a>
              <a href="#"><Fa icon="fa fa-linkedin" /></a>
            </section>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default Nav;
