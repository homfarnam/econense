import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

export default Button;
