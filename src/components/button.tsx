import React from 'react'

interface ButtonProps {
  title: string
  disabled?: boolean
  autofocus?: boolean
  onClick: () => void
}
class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        disabled={!!this.props.disabled ? this.props.disabled : false}
        autoFocus={!!this.props.autofocus ? this.props.autofocus : false}
        className="button-component"
        onClick={() => this.props.onClick()}
      >
        {this.props.title}
      </button>
    )
  }
}
export default Button
