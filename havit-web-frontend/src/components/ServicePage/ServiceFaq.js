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
        ...Array(i).fill(false),
        !this.state.isOpened[i],
        ...Array(9 - i).fill(false),
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
            <table className="serviceFaq__table">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr className="q1" onClick={() => this.toggleFaq(0)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>회원만 예약이 가능한가요?</td>
                </tr>
                {this.state.isOpened[0] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        네, <span>havit</span>은 <span>회원제를 시행</span>하고
                        있습니다.
                      </p>
                      <p className="serviceFaq__answer">
                        회원가입을 하시면 <span>다양한 혜택</span>을 받으실 수
                        있습니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(1)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>예약한 내용은 어디에서 확인하나요?</td>
                </tr>
                {this.state.isOpened[1] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        고객님이 예약하신 상품은 우측상단{' '}
                        <span>[마이페이지]</span> -
                        <span> [구매내역]</span>에서 확인하실 수 있습니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(2)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>상품에 대한 문의는 어떻게 하나요?</td>
                </tr>
                {this.state.isOpened[2] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        상품을 예약함과 동시에 상담전화 예약을 하게됩니다.
                      </p>
                      <p className="serviceFaq__answer">
                        통화 가능한 시간대에 예약하실 수 있습니다.
                      </p>
                      <p className="serviceFaq__answer">
                        <span>havit</span> 이용에 관한 사항의 경우{' '}
                        <span>1544-3441</span>로 전화주시기 바랍니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(3)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>상품 취소는 어떻게 하나요?</td>
                </tr>
                {this.state.isOpened[3] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        상품 취소는 <span>[마이페이지]</span> -{' '}
                        <span>[예약내역]</span>에서 가능합니다.
                      </p>
                      <p className="serviceFaq__answer">
                        <span>[예약취소]</span>를 클릭하시면 해당 병원에서도
                        확인이 가능합니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(4)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>개인정보는 어디에서 수정할 수 있나요?</td>
                </tr>
                {this.state.isOpened[4] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        고객님의 개인정보는 우측상단 <span>[마이페이지]</span> -
                        <span>[정보수정]</span>에서 수정하실 수 있습니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(5)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>크레딧이 무엇인가요?</td>
                </tr>
                {this.state.isOpened[5] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        <span>크레딧</span>은 <span>현금처럼 사용이 가능</span>합니다.
                      </p>
                      <p className="serviceFaq__answer">
                        이벤트, 시술후기 등으로 적립하실 수 있습니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(6)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>이용후기는 어떻게 작성하나요?</td>
                </tr>
                {this.state.isOpened[6] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        이용후기는 <span>[마이페이지]</span> -{' '}
                        <span>[예약내역]</span>에서 시술한 상품을 선택하신 후
                        작성이 가능합니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(7)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>이벤트 상품은 언제까지 진행되나요?</td>
                </tr>
                {this.state.isOpened[7] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        각 이벤트 상품의 유효기간은{' '}
                        <span>상품 페이지 내에 기재</span>되어 있습니다.
                      </p>
                      <p className="serviceFaq__answer">
                        여러 회차의 패키지 상품을 구매하신 경우 해당 유효기간
                        내에 시술이 진행되면 그 이후에도 남은 시술을 받으실 수
                        있습니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(8)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>다회권으로 친구, 가족과 함께 시술을 받을 수 있나요?</td>
                </tr>
                {this.state.isOpened[8] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        다회권을 구매하여 본인 이외의 사람이 나누어 시술 받는
                        것은 어렵습니다.
                      </p>
                      <p className="serviceFaq__answer">
                        시술의 확실한 효과를 위해{' '}
                        <span>다회권으로 구성된 옵션이 따로 제공</span>되고
                        있습니다.
                      </p>
                    </td>
                  </tr>
                )}
                <tr className="q1" onClick={() => this.toggleFaq(9)}>
                  <td className="serviceFaq__q">Q.</td>
                  <td>부가세가 포함인가요 별도인가요?</td>
                </tr>
                {this.state.isOpened[9] && (
                  <tr className="q1">
                    <td className="serviceFaq__a">A.</td>
                    <td className="serviceFaq__answerBack">
                      <p className="serviceFaq__answer">
                        <span>havit</span>에서 진행하고 있는 모든 상품은
                        <span>부가세가 포함된 가격</span>으로,{' '}
                        <span>추가 금액 없이</span> 시술을 받으실 수 있습니다.
                      </p>
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
