import React from 'react';
import Button from './button';

interface ModalProps {
  modal: boolean;
  usersAnswer: string;
  answer: string;
  isCorrectAnswer: boolean;
  onCloseModal: () => void;
};
class Modal extends React.Component<ModalProps> {
  closeModal() {
    this.props.onCloseModal();
  }
  render() {
    return (
      <React.Fragment>
        { this.props.modal === true ? 
          <div
            className="modal"
          >
            モーダル開いている状態{
              this.props.isCorrectAnswer ?
              <p>正解です！</p> :
              <p>残念不正解です...</p>
            }
            <p>正解：{this.props.answer}</p>
            <p>あなたの回答：{this.props.usersAnswer}</p>
            <Button
              title="閉じる"
              onClick={() => this.closeModal()}
            />
          </div>
          :
          <div>
            モーダル閉じている状態
          </div>
        }
      </React.Fragment>
    );
  }
}
export default Modal