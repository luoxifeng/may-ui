import React, { PropsWithChildren } from 'react';
import './style.css';

type IProps = PropsWithChildren<{
  url: string;
}>;

export const Preview = ({ children }: IProps) => {
  document.documentElement.classList.add('no-scrollbar');
  return (
    <div className="preview-container">
      {children}
    </div>
  );
};
