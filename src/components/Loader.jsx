import React from 'react';
import styles from '../styles.module.css';

const Loader = () => {
    return (
      <div className={styles.loading__screen}>
        <div className={styles.loading__spinner}></div>
      </div>
    );
};

export default Loader;