import React from 'react';
import { store } from '../store';
import { routeActions } from 'react-router-redux';
var Menu = require('react-burger-menu').slide;

class MainLayout extends React.Component {

  constructor(){
    super();
    this.state = {
      sidebar: false
    }
  }

  showSettings(event) {
    event.preventDefault();
  }

  closePanel(){
    this.setState({sidebar:false});
  }

  render() {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#ffffff'
      },
      bmMenu: {
        background: '#CF5C60',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }   
    }

    var maxSize = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%'
    }



    return (
      <div>
        <Menu styles={ styles } isOpen={false}>
          <a onClick={ this.closePanel.bind(this) } id="home" className="menu-item" href="/#/">Home</a>
          <a onClick={ this.closePanel.bind(this) } id="cssToJSON" className="menu-item" href="/#/csstojson">CSS to JSON</a>
          <a onClick={ this.closePanel.bind(this) } id="urlEncoder" className="menu-item" href="/#/urlencoder">URL Encoder</a>
        </Menu>
        <div id="outer-container" style={ maxSize }>
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
          <main id="page-wrap" style={ maxSize }>
            {this.props.children}
          </main>
        </div>
        
      </div>
    );
  }
}

export default MainLayout;
