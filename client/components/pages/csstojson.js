import React from 'react';
var FontAwesome = require('react-fontawesome');
import {transform} from './convertcss.js';

class CssToJSON extends React.Component {

  constructor(){
    super();
    this.state = {
      input: '',
      mode: 'css'
    }
  }

  handleChange(e) {
    var inputTxt = e.target.value
    this.setState({input: inputTxt})
    this.setState({mode: 'css'})
  }

  convertCSS() {
    if(this.state.mode === 'css'){
      var transformed = transform(this.state.input);
      this.setState({input: transformed})
      this.setState({mode: 'json'})
    }
  }

  render() {

  var styles = {
    body: {
      backgroundColor: '#717ECD',
      color: '#fff'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    input: {
      width: '37vw',
      height: '55vh'
    },
    convertButton: {
      display: 'block',
      margin: '20px auto 0 auto',
      background: 'white',
      borderRadius: '50%',
      height: '70px',
      width: '70px'
    },
    buttonGraphic: {
      fontSize: '30px',
      color: '#717ECD',
      marginTop: '3px'
    }
  } 

    return (
      <div style={styles.body} className="full">
        <div className="center-div">
          <h1 style={styles.title}>CSS to JSON</h1>
          <textarea 
            placeholder='Paste CSS Here'
            value={this.state.input} 
            onChange={this.handleChange.bind(this)}
            style={styles.input}
          />
          <button 
            onClick={ this.convertCSS.bind(this) }
            style={styles.convertButton} 
            className="btn"
            disabled={this.state.mode === 'json'}
          >
            <i style={styles.buttonGraphic} className="fa fa-magic"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CssToJSON;
