import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

function Admin() {
  return (
      <>
    <Header/>
    <Dashboard/>

    <footer className={styles.footer}>
          <a
            href="https://farhanibnesaif.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '} DZ
            <span className={styles.logo}>      
            </span>
          </a>
        </footer>

    </>
    
  )
}

export default Admin