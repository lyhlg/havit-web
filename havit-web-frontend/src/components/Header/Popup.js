import React, { Component } from 'react';
import 'styles/css/Header/Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1 className="popup_text">{this.props.text}</h1>
          <button onClick={this.props.closePopup} className="popup__button">
            이용약관 확인
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
