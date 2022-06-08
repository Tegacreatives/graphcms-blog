import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
      <>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.navbar}>
          <div className={styles.logo}>
              <Link href="/">
                  <h1 className={styles.logotext}>Estate Blog</h1>
              </Link>
          </div>
          <div className={styles.navlinks}>
              <ul>
                  <li>
                      <Link href="/about">About Project</Link>
                  </li>
                  <li onClick={() => window.open("https://github.com/Tegacreatives", "_blank")}>
                      Github Repo 
                  </li>
              </ul>
          </div>
    </div>
    </>
  )
}

export default Navbar