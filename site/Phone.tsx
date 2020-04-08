import React, { Component, PropsWithChildren } from 'react';
import './style.css';

type IProps = PropsWithChildren<{
  url: string;
}>;

export default class Phone extends Component<IProps> {

  static defaultProps = {
    url: '/demo/button'
  };

  public render() {
    const { url } = this.props;

    return (
      <div className="phone-wrapper">
        <iframe src={url} frameBorder="0" title="phone" />
      </div>
    );
  }
}
