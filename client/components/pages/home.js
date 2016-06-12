import React from 'react';
var FontAwesome = require('react-fontawesome');

class HomePage extends React.Component {

  render() {
    var styles = {
      body: {
        backgroundColor: '#4AB471',
      },
      title: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: "'Fjalla One', sans-serif",
      },
      img: {
        color: '#fff',
        fontSize: '40vh',
        textAlign: 'center',
        margin: '0 auto',
        // animation: 'fa-spin 200s infinite linear',
        display: 'block',
      }
    }

    return (
      <div style={styles.body} className="full">
        <div className="center-div">
          <h1 style={styles.title}>Front-End Toolbox</h1>
          <i style={styles.img} className="fa fa-code"></i>
        </div>
      </div>
    );
  }
}

export default HomePage;
