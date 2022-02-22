import React from 'react';
import Input from './input';
import Button from './button';
import Modal from './modal';

const prefectualOfficeLocation = [
  [ '北海道', '札幌市' ], // 0
  [ '青森県', '青森市' ], // 1
  [ '岩手県', '盛岡市' ], // 2
  [ '宮城県', '仙台市' ], // 3
  [ '秋田県', '秋田市' ], // 4
  [ '山形県', '山形市' ], // 5
  [ '福島県', '福島市' ], // 6
  [ '茨城県', '水戸市' ], // 7
  [ '栃木県', '宇都宮市' ], // 8
  [ '群馬県', '前橋市' ], // 9
  [ '埼玉県', 'さいたま市' ], // 10
  [ '千葉県', '千葉市' ], // 11
  [ '東京都', '新宿区' ], // 12
  [ '神奈川県', '横浜市' ], // 13
  [ '新潟県', '新潟市' ], // 14
  [ '富山県', '富山市' ], // 15
  [ '石川県', '金沢市' ], // 16
  [ '福井県', '福井市' ], // 17
  [ '山梨県', '甲府市' ], // 18
  [ '長野県', '長野市' ], // 19
  [ '岐阜県', '岐阜市' ], // 20
  [ '静岡県', '静岡市' ], // 21
  [ '愛知県', '名古屋市' ], // 22
  [ '三重県', '津市' ], // 23
  [ '滋賀県', '大津市' ], // 24
  [ '京都府', '京都市' ], // 25
  [ '大阪府', '大阪市' ], // 26
  [ '兵庫県', '神戸市' ], // 27
  [ '奈良県', '奈良市' ], // 28
  [ '和歌山県', '和歌山市' ], // 29
  [ '鳥取県', '鳥取市' ], // 30
  [ '島根県', '松江市' ], // 31
  [ '岡山県', '岡山市' ], // 32
  [ '広島県', '広島市' ], // 33
  [ '山口県', '山口市' ], // 34
  [ '徳島県', '徳島市' ], // 35
  [ '香川県', '高松市' ], // 36
  [ '愛媛県', '松山市' ], // 37
  [ '高知県', '高知市' ], // 38
  [ '福岡県', '福岡市' ], // 39
  [ '佐賀県', '佐賀市' ], // 40
  [ '長崎県', '長崎市' ], // 41
  [ '熊本県', '熊本市' ], // 42
  [ '大分県', '大分市' ], // 43
  [ '宮崎県', '宮崎市' ], // 44
  [ '鹿児島県', '鹿児島市' ], // 45
  [ '沖縄県', '那覇市' ], // 46
]
const quuestionsLength = prefectualOfficeLocation.length
// 問題の数を少なくしてテストする場合に使う
// const quuestionsLength = 3
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const questionsArray = shuffle(prefectualOfficeLocation) as Array<Array<string>>
const initialNumber = 0
interface QuestionState {
  questionNumber: number,
  prefecture: string;
  city: string;
  modal: boolean;
  buttonDisabled: boolean;
  inputDisabled: boolean;
  inputValue: string;
  isCorrectAnswer: boolean;
  end: boolean;
};

class Question extends React.Component<{}, QuestionState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      questionNumber: initialNumber,
      prefecture: questionsArray[initialNumber][0],
      city: questionsArray[initialNumber][1],
      modal: false,
      buttonDisabled: false,
      inputDisabled: false,
      inputValue: '',
      isCorrectAnswer: false,
      end: false,
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
  }
  handleOpenModal() {
    const inputAnswer = this.state.inputValue
    const answer = this.state.city
    this.setState({
      modal: true,
      buttonDisabled: true,
      inputDisabled: true,
    })
    if (inputAnswer === answer) {
      this.setState({
        isCorrectAnswer: true,
      })
    } else {
      this.setState({
        isCorrectAnswer: false,
      })
    }
    if (this.state.questionNumber < quuestionsLength) {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
      })
    }
  }
  handleCloseModal() {
    this.setState({
      modal: false,
      buttonDisabled: false,
      inputDisabled: false,
      inputValue: '',
    })
    if (this.state.questionNumber < quuestionsLength) {
      this.setState({
        prefecture: questionsArray[this.state.questionNumber][0],
        city: questionsArray[this.state.questionNumber][1],
      })
    } else {
      this.setState({
        end: true,
      })
    }
  }
  handleChangeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
      const start =
        <React.Fragment>
          <p className="question">
            {this.state.prefecture}の県庁所在地は？
          </p>
          <Input
            inputValue={this.state.inputValue}
            disabled={this.state.inputDisabled}
            onChangeInputValue={this.handleChangeInputValue}
          />
          <Button
            title="回答する"
            disabled={this.state.buttonDisabled}
            onClick={() => this.handleOpenModal()}
          />
          <Modal
            modal={this.state.modal}
            usersAnswer={this.state.inputValue}
            answer={this.state.city}
            isCorrectAnswer={this.state.isCorrectAnswer}
            onCloseModal={this.handleCloseModal}
          />
        </React.Fragment>
      const end = <div>クイズ終了</div>
    return (
      <React.Fragment>
        {
          this.state.end ? end : start
        }
      </React.Fragment>
    );
  }
}

export default Question