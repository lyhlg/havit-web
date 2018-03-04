import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/css/ServicePage/ServiceFaq.css';

class ServiceFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: Array(10).fill(false),
    };
    this.toggleFaq = this.toggleFaq.bind(this);
  }

  toggleFaq(i) {
    this.setState({
      isOpened: [
        ...this.state.isOpened.slice(0, i),
        !this.state.isOpened[i],
        ...this.state.isOpened.slice(i + 1),
      ],
    });
  }

  render() {
    console.log('isOpened', this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = (
        <div>
          네, havit은 회원제를 시행하고 있습니다. 회원가입을 하시면 다양한
          혜택을 받으실 수 있습니다.
        </div>
      );
    }
    return (
      <div className="serviceFaq">
        <div className="serviceFaq__wrapper">
          <div className="serviceFaq__tab">
            <h2 className="serviceFaq__title">FAQ (자주묻는질문)</h2>
            <table className="serviceFaq__table">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr className="q1" onClick={() => this.toggleFaq(0)}>
                  <td className="qa">Q.</td>
                  <td>회원만 예약이 가능한가요?</td>
                </tr>
                {this.state.isOpened[0] && (
                  <tr className="q1">
                    <td className="qa">A.</td>
                    <td>
                      네, havit은 회원제를 시행하고 있습니다. 회원가입을 하시면
                      다양한 혜택을 받으실 수 있습니다.
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(1)}>
                  <td className="qa">Q.</td>
                  <td>회원만 예약이 가능한가요?</td>
                </tr>
                {this.state.isOpened[1] && (
                  <tr className="q1">
                    <td className="qa">A.</td>
                    <td>
                      네, havit은 회원제를 시행하고 있습니다. 회원가입을 하시면
                      다양한 혜택을 받으실 수 있습니다.
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(2)}>
                  <td className="qa">Q.</td>
                  <td>회원만 예약이 가능한가요?</td>
                </tr>
                {this.state.isOpened[2] && (
                  <tr className="q1">
                    <td className="qa">A.</td>
                    <td>
                      네, havit은 회원제를 시행하고 있습니다. 회원가입을 하시면
                      다양한 혜택을 받으실 수 있습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceFaq;
