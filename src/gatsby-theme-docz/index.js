import React from 'react';
import { Styled, ThemeProvider } from 'theme-ui';
import defaultTheme from 'gatsby-theme-docz/src/theme';
import components from 'gatsby-theme-docz/src/components';
import {
  useCurrentDoc,
  doczState,
  useConfig,
  ComponentsProvider
} from 'docz';
// import Preview from 'site/Preview';
// import DefaultTheme from 'gatsby-theme-docz/src';
// import * as R from 'ramda';

/* eslint-disable */

const DoczDefaultTheme = ({ children }) => {
  const config = useConfig();
  console.log(components);
// components.layout = (props) => <div>{props.children}</div>
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Styled.root>
          {children}
        </Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
};

const Preview = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};


function theme(themeConfig, transform = c => c) {
  return WrappedComponent => {
    const Theme = React.memo(props => {
      const {
        db,
        currentEntry,
        children
      } = props;
      const initial = Object.assign({}, db, {
        currentEntry,
        themeConfig,
        transform
      });

      return (
        <doczState.Provider initial={initial}>
          <WrappedComponent>
            {children}
          </WrappedComponent>
        </doczState.Provider>
      )

      // return React.createElement(doczState.Provider, {
      //   initial: initial
      // }, React.createElement(WrappedComponent, null, children));
    });
    Theme.displayName = WrappedComponent.displayName || 'DoczTheme';
    return Theme;
  };
}

const SwitchTheme = ({ children }) => {
  const currentDoc = useCurrentDoc() || {};
  const { route = '' } = currentDoc;

  if (route.startsWith('/preview')) {
    return <Preview children={children} route={route}/>;
  }

  return <DoczDefaultTheme children={children} />;
}

export default theme(defaultTheme)(SwitchTheme);
