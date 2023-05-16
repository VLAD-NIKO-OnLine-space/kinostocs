import React, { useState } from 'react';
import FilmItem from '../FilmItem/FilmItem';
import styles from './FilmList.module.css';
import Modal from '../../UI/Modal/Modal';
import { getInfoById } from '../../Service/serviceFilf';
import ModalContent from '../ModalContent/ModalContent';
import Loading from '../../UI/Loading/Loading';


const FilmList = ({allFilm}) => {

    const [visible, setVisible] = useState(false)
    const [filmId, setFilmId] = useState({})
    const [loading, setLoading] = useState(true)
    const [amount, setAmount] = useState([])

    const getValue = async (value) => {
        setLoading(true)
        const [result, resuseAmpunt] = await getInfoById(value)
        setFilmId(result)
        
        resuseAmpunt.forEach(e=> {
            if (e.type === 'WORLD'){setAmount(e.amount)}
        })

        setLoading(false)

    }

    return (
        <div className={styles.container}>

            <Modal visible={visible} setVisible={setVisible}>
                {loading 
                ?  <Loading/>
                :  <ModalContent filmId={filmId} setVisible={setVisible} amount={amount}/>
                }
            </Modal>
 
            {allFilm.map(e => <FilmItem item={e} key={e.filmId} getValue={getValue} setVisible={setVisible}/>)}
        </div>
    );
};



export default FilmList;