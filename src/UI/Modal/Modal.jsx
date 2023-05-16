import React from 'react';
import styles from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const rootStyles = [styles.main]
    if(visible){
        rootStyles.push(styles.active)
    }

    return (
        <div className={rootStyles.join(' ')} onClick={()=> setVisible(false)}>
            <div className={styles.content} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};


export default Modal;