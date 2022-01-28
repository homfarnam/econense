import React from 'react';

interface TitleProps {
  title: string;
  className?: React.HTMLAttributes<HTMLHeadingElement>['className'];
}

const Title: React.FunctionComponent<TitleProps> = ({ title, className = '' }) => {
  return (
    <h3 className={`flex items-center justify-center w-full text-4xl ${className}`}>{title}</h3>
  );
};

export default Title;
