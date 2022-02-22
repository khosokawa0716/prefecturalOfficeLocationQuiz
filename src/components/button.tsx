import React from 'react';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
};
class Button extends React.Component<ButtonProps>  {
  render() {
    return (
      <button
        disabled={!!this.props.disabled ? this.props.disabled : false}
        className="square"
        onClick={() => this.props.onClick()}
      >
        { this.props.title }
      </button>
    );
  }
}
export default Button