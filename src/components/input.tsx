import React from 'react'
type InputProps = {
  id?: any
  inputValue: string
  disabled: boolean
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

class Input extends React.Component<InputProps> {
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChangeInputValue(event)
  }
  render() {
    return (
      <input
        type="text"
        id={this.props.id}
        value={this.props.inputValue}
        disabled={this.props.disabled}
        onChange={(event) => this.handleChange(event)}
      />
    )
  }
}

export default Input
