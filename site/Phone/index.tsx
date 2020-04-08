import React, { Component, PropsWithChildren } from 'react';
import './style.css';

type IProps = PropsWithChildren<{
  url: string;
}>;

export default class Phone extends Component<IProps> {

  public render() {
    const { url = '/' } = this.props;

    return (
      <div className="phone-wrapper">
        <iframe src={`${url}?from=phone`} frameBorder="0" title="phone" />
      </div>
    );
  }
}
