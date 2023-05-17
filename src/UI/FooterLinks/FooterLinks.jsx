import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterLinks.module.css'

const FooterLinks = ({children, ...props}) => {
    return (
        <Link {...props} className={styles.link}>
            {children}
        </Link>
    );
};



export default FooterLinks;