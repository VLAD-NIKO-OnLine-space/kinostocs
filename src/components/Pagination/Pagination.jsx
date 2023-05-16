import React from 'react';
import styles from './Pagination.module.css';
import PaginationButton from '../../UI/PaginationButton/PaginationButton';

const Pagination = ({films, setFilms}) => {

    const increment = () => films.page += 1
    const decrement = () => films.page -= 1

    const haldleClick = () => {
        if (films.page < films.totalPage){
            setFilms({...films, page: increment()})
            window.scrollTo({top: 0}) 
        }}

    const backHandleClick = () => {
        if (films.page >= 2){
            setFilms({...films, page: decrement()})
        }
        window.scrollTo({top: 0})
    }


    const onFirst = () => {
        if (films.page !== 1){
            setFilms({...films, page: 1})
        }
        window.scrollTo({top: 0})
    }

    const onLast = () => {
        if (films.page !== films.totalPage){
            setFilms({...films, page: films.totalPage})
            
        }
        window.scrollTo({top: 0})

    }


    return (
        <div className={styles.container}>
            <PaginationButton onClick={onFirst}>На первую</PaginationButton>
            <PaginationButton onClick={backHandleClick}>&lt; назад</PaginationButton>
            <p className={styles.page}>{films.page}</p>
            <PaginationButton onClick={haldleClick}>вперед &gt;</PaginationButton>
            <PaginationButton onClick={onLast}>Последняя</PaginationButton>
        </div>
    );
};



export default Pagination;