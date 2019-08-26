import React from 'react';
import styles from './Container.module.css'
// import Input from '../Input';
import Container from '@material-ui/core/Container';
import Footer from '../Footer';
import LogoBanner from '../LogoBanner'

export default ({children, prevView, nextView}) => 
  <div className={styles.container}>
    <main className={styles.main}>
      <Container maxWidth='md'>
        <LogoBanner nextView={nextView} />
        {children}
        <div style={{height: "50vh"}}/>
      </Container>
    </main>
    <Footer prevView={prevView} nextView={nextView} />
  </div>



