import React, { Component, PropsWithChildren } from 'react';
import './style.css';

type IProps = PropsWithChildren<{
  url: string;
}>;

export default class Phone extends Component<IProps> {

  public render() {
    const { url = '/' } = this.props;
    console.log(url, '+++++');

    return (
      <div className="phone-wrapper">
        <div className="phone-bangs" />
        <div className="phone-inner">
          <iframe src={`${url}`} frameBorder="0" title="phone" />
        </div>
        <div className="phone-bar" />
      </div>
    );
  }
}
