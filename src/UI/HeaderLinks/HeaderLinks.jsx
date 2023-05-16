import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLinks.module.css'


const HeaderLinks = ({link}) => {

    const [active, setActive] = useState(1);

    const handleClick = (e) => {
        const a = e.target.id
        setActive(a)
    }

    return (

        <Link 
            to={link.to} 
            className={styles.link} 
            id={link.id}
            onClick={handleClick}
        >
            {link.title}
        </Link>
      
    );
};



export default HeaderLinks;


