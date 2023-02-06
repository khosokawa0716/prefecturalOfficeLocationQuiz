import React from 'react'
import Button from './button'

interface ModalProps {
  modal: boolean
  usersAnswer: string
  answer: string
  isCorrectAnswer: boolean
  onCloseModal: () => void
}
class Modal extends React.Component<ModalProps> {
  closeModal() {
    this.props.onCloseModal()
  }
  render() {
    return (
      <React.Fragment>
        {this.props.modal ? (
          <div className="modal-component-wrapper">
            <div className="modal-component-background"></div>
            <div className="modal-component">
              <h3 className="modal-component-title">
                回答結果（かいとうけっか）
              </h3>
              {this.props.isCorrectAnswer ? (
                <p className="modal-component-result">正解（せいかい）です！</p>
              ) : (
                <p className="modal-component-result incorrect">
                  ざんねん、不正解（ふせいかい）です...
                </p>
              )}
              <dl>
                <dt>正解（せいかい）：</dt>
                <dd>{this.props.answer}</dd>
                <dt>あなたの回答（かいとう）：</dt>
                <dd>{this.props.usersAnswer}</dd>
              </dl>
              <div className="modal-component-button-area">
                <Button
                  title="とじる"
                  autofocus
                  onClick={() => this.closeModal()}
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    )
  }
}
export default Modal
