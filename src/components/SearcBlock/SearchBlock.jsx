import React from 'react';
import styles from './SearchBlock.module.css'
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';
import { SearchFilm } from '../../Service/serviceFilf';



const SearchBlock = ({value, setValue, setSearchResult, setNullResult, setloading}) => {

    const handleclick = async () => {
        setloading(true)
        const res = await SearchFilm(value)
        if (res.length) {setNullResult(false)} 
        else {setNullResult(true)}
        setSearchResult(res)
        setloading(false)
    }



    return (
        <div className={styles.wrapper}>
            <MyInput
                value={value}
                onChange = {e => setValue(e.target.value)}
                placeholder = 'Введите название фильма...'
                required
            />
            <MyButton onClick={handleclick}>Поиск</MyButton>
        </div>
    );
};


export default SearchBlock;