import React from 'react';
var FontAwesome = require('react-fontawesome');

class URLEncoder extends React.Component {

  constructor(){
    super();
    this.state = {
      input: '',
      mode: 'encode'
    }
  }

  handleChange(e) {
    var inputTxt = e.target.value
    this.setState({input: inputTxt})
    if(inputTxt.substring(0,5) === "http:") this.setState({mode: 'encode'})
    else this.setState({mode: 'decode'})
  }

  convertURL() {
    if(this.state.mode === 'encode'){
      var encoded = encodeURIComponent(this.state.input);
      this.setState({input: encoded})
      this.setState({mode: 'decode'})
    }else{
      var decoded = decodeURIComponent(this.state.input);
      this.setState({input: decoded})
      this.setState({mode: 'encode'})
    }
  }

  render() {

  var styles = {
    body: {
      backgroundColor: '#4EB1CB',
      color: '#fff'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    input: {
      width: '100%',
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
      color: '#4EB1CB',
      marginTop: '3px'
    }
  } 

    return (
      <div style={styles.body} className="full">
        <div className="center-div">
          <h1 style={styles.title}>URL Encoder / Decoder</h1>
          <textarea 
            placeholder='Enter URL to encode/decode'
            value={this.state.input} 
            onChange={this.handleChange.bind(this)}
            style={styles.input}
          />
          <button 
            onClick={ this.convertURL.bind(this) }
            style={styles.convertButton} 
            className="btn"
          >
            <i style={styles.buttonGraphic} className="fa fa-magic"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default URLEncoder;
