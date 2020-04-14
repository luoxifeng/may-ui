/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx, Layout as BaseLayout, Main, Box } from 'theme-ui';
import { Global } from '@emotion/core';
import { Header } from 'gatsby-theme-docz/src/components/Header';
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar';
import {
  useCurrentDoc,
} from 'docz';
// import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer';
import global from 'gatsby-theme-docz/src/theme/global';
import Phone from '../Phone';
import * as styles from './styles';
import './style.css';


export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef();
  const { route = '' } = useCurrentDoc() || {};

  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <Header onOpen={() => setOpen(s => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <div className="main-wrapper">
            <div className="main-demo">
              {/* <MainContainer data-testid="main-container">{children}</MainContainer> */}
              <Box
                sx={{
                  width: '100%',
                  minWidth: 1000,
                  maxWidth: 1024,
                  p: 4,
                  variant: 'styles.Container'
                }}
              >
                {children}
              </Box>
            </div>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Phone url={route.replace(/components/, 'preview')} />
            </Box>
          </div>
        </div>
      </Main>
    </BaseLayout>
  );
};
