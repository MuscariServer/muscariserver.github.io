import * as React from 'react';
import Head from 'next/head';
import styles from "./index.module.scss";
import styler from 
"./boxicons/css/boxicons.min.css"
import classNames from 'classnames';

export default (): JSX.Element => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logoDetails}>
            <i className={'bx bxl-c-plus-plus icon'}></i>
            <div className={styles.logo_name}>Muscari</div>
            <i className='bx bx-menu' id="btn"></i>
        </div>
    </div>
  );
};