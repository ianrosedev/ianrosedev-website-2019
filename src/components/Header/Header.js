import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <svg
      className={styles.logo}
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='1.414'
      clipRule='evenodd'
      viewBox='0 0 558 200'
    >
      <path fill='none' d='M0 0h557.107v200H0z' />
      <clipPath id='a'>
        <path d='M0 0h557.107v200H0z' id='Artboard' />
      </clipPath>
      <g clipPath='url(#a)'>
        <g fillRule='nonzero'>
          <path
            d='M486.92 80.463c-8.955 0-15.898 2.68-20.826 8.038-4.93 5.36-8.028 12.62-9.294 21.782h60.103c-.633-9.767-3.732-17.179-9.294-22.235-5.562-5.057-12.458-7.585-20.69-7.585zm0-30.468c12.3 0 23.38 2.204 33.24 6.612 9.858 4.408 17.998 11.366 24.42 20.874 5.79 8.384 9.542 18.108 11.261 29.172.996 6.482 1.402 15.817 1.221 28.005H455.85c.543 14.174 5.2 24.115 13.974 29.819 5.337 3.544 11.759 5.315 19.266 5.315 7.959 0 14.426-2.16 19.401-6.482 2.713-2.333 5.111-5.575 7.192-9.723h39.48c-.996 8.384-5.563 16.897-13.704 25.54-12.662 13.744-30.39 20.615-53.183 20.615-18.813 0-35.41-5.79-49.792-17.372-14.381-11.584-21.57-30.426-21.57-56.53 0-24.46 6.49-43.216 19.467-56.268 12.98-13.051 29.826-19.577 50.538-19.577z'
            id='Letter E'
          />
          <path d='M331.678 149.956c.812 6.57 2.577 11.236 5.29 14.003 4.794 4.927 13.658 7.39 26.592 7.39 7.598 0 13.636-1.08 18.113-3.241s6.715-5.402 6.715-9.725c0-4.15-1.81-7.304-5.427-9.465-3.617-2.16-17.05-5.876-40.294-11.148-16.734-3.977-28.536-8.947-35.411-14.911-6.874-5.877-10.31-14.348-10.31-25.412 0-13.051 5.359-24.266 16.077-33.644 10.717-9.378 25.799-14.067 45.245-14.067 18.452 0 33.49 3.522 45.112 10.566 11.621 7.045 18.293 19.21 20.011 36.497h-38.667c-.542-4.754-1.943-8.514-4.204-11.28-4.252-5.013-11.488-7.52-21.708-7.52-8.412 0-14.405 1.254-17.977 3.76-3.572 2.507-5.36 5.446-5.36 8.817 0 4.235 1.9 7.304 5.698 9.205 3.8 1.988 17.23 5.402 40.295 10.243 15.377 3.457 26.908 8.686 34.596 15.687 7.598 7.088 11.398 15.947 11.398 26.58 0 14.001-5.45 25.432-16.349 34.292-10.899 8.859-27.745 13.288-50.538 13.288-23.245 0-40.408-4.688-51.487-14.066-11.08-9.378-16.62-21.328-16.62-35.85h39.21z' />
          <path d='M228.74 169.015c11.306 0 19.989-3.846 26.05-11.538 6.059-7.694 9.089-18.627 9.089-32.803 0-14.176-3.03-25.087-9.09-32.737-6.06-7.65-14.743-11.474-26.048-11.474-11.307 0-20.013 3.825-26.117 11.474-6.106 7.65-9.159 18.561-9.159 32.737 0 14.176 3.053 25.109 9.159 32.803 6.104 7.692 14.81 11.538 26.117 11.538zm75.704-44.34c0 20.743-6.24 38.484-18.722 53.22-12.48 14.739-31.43 22.107-56.846 22.107-25.417 0-44.365-7.368-56.847-22.106-12.481-14.737-18.723-32.478-18.723-53.222 0-20.398 6.242-38.074 18.723-53.027 12.482-14.953 31.43-22.43 56.847-22.43 25.415 0 44.365 7.477 56.846 22.43 12.483 14.953 18.722 32.629 18.722 53.027z' />
        </g>
        <path d='M40.836 121.584V88.479h47.35c9.407 0 16.461-1.085 21.164-3.256 8.322-3.798 12.483-11.305 12.483-22.52 0-12.122-4.026-20.261-12.075-24.422-4.522-2.351-11.307-3.527-20.351-3.527l-48.571-.009V.022H98.09c14.02.27 24.805 1.99 32.358 5.156C138 8.342 144.4 13 149.646 19.15a61.905 61.905 0 0 1 10.31 16.824c2.532 6.15 3.8 13.16 3.8 21.028 0 9.498-2.398 18.837-7.191 28.017-4.795 9.18-12.709 15.67-23.743 19.469 9.226 3.707 15.76 8.976 19.604 15.806 3.845 6.829 5.766 17.253 5.766 31.271V165c0 9.134.363 15.33 1.085 18.587 1.086 5.156 3.62 8.954 7.598 11.395v5.02h-45.992c-1.266-4.431-2.171-8.003-2.713-10.717a98.45 98.45 0 0 1-1.764-17.231l-.271-18.587c-.182-12.753-2.511-21.254-6.988-25.505-4.477-4.251-12.867-6.377-25.167-6.377H40.836z' />
        <path
          fill='#fff'
          d='M40.837 52.785V34.73L0 34.736V.001l40.828.003c.005 0 .009.005.009.01v199.987H0V52.785h40.837z'
        />
      </g>
    </svg>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/' activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/blog' activeClassName={styles.active}>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/code' activeClassName={styles.active}>
            Code
          </Link>
        </li>
        <li>
          <Link to='/about' activeClassName={styles.active}>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' activeClassName={styles.active}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
