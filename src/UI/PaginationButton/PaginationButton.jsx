import React from 'react';
import styles from './PaginationButton.module.css'

const PaginationButton = ({children, ...props}) => {


    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
};


export default PaginationButton;