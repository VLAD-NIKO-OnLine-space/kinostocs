import React from 'react';
import styles from './MyInput.module.css'

const MyInput = ({...props}) => {
    return (
        <input type="text" 
            {...props}
            className={styles.MyInput}
        />
    );
};



export default MyInput;