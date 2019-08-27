import React from 'react';
import styles from './Container.module.css'
import Container from '@material-ui/core/Container';
import Footer from '../Footer';
import LogoBanner from '../LogoBanner'

export default ({children, prevView, nextView, containerRef, setSpecificView}) => (
  <div className={styles.container} >
    <main className={styles.main} ref={containerRef}>
      <Container maxWidth='md'>
        <LogoBanner setSpecificView={setSpecificView} />
        {children}
        <div style={{height: "50vh"}}/>
      </Container>
    </main>
    <Footer prevView={prevView} nextView={nextView} />
  </div>
)
