import React, { SyntheticEvent } from 'react';
import cls from 'classnames';
import './style.css';

interface IProps {
  text: string;
  html: string;
  size: 'large' | 'nomarl' | 'small';
  type: string;
  onClick(e?: SyntheticEvent): void;
}

export default ({
  text,
  html,
  size = 'nomarl',
  type
}: Partial<IProps>) => {
  const btnClses = [];
  type && btnClses.push(`btn-${type}`);
  size && btnClses.push(`btn-${size}`);

  let btn = <span>ok</span>;
  if (html) {
    btn = <span dangerouslySetInnerHTML={{ __html: html }} />;
  } else if (text) {
    btn = <span>{text}</span>;
  }

  return (
    <button
      type="button"
      className={cls('btn-default', btnClses.join(' '))}
    >
      {btn}
    </button>
  );
};
