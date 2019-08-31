import React from 'react';
import styles from './Container.module.css'
import Container from '@material-ui/core/Container';
import Footer from '../Footer';
import LogoBanner from '../LogoBanner'

export default ({children, viewState, containerRef, setView, dispatch, logo, title}) => (
  <div className={styles.container} >
    <main className={styles.main} ref={containerRef}>
      <Container maxWidth='md'>
        <LogoBanner setView={setView} dispatch={dispatch} logo={logo} title={title}/>
        {children}
        <div style={{height: "50vh"}}/>
      </Container>
    </main>
    <Footer setView={setView} viewState={viewState} />
  </div>
)
