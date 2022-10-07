import React, {FC, useEffect, useState} from 'react';

import './pictures.modules.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {getAllPictureThunk} from "../../store/slices/picture.slice";
import Picture from "../Picture/Picture";

const Pictures: FC<{ limit: number; }> = ({limit}) => {


    const [page, setPage] = useState<number>(1);


    const nextPage = () => {
        if (limit === 20) {
            setPage(1);
            if (page > 0 && page < 50) {
                setPage(page + 1);
            }
        }
        if (limit === 50) {
            setPage(1);
            if (page > 0 && page < 20) {
                setPage(page + 1);
            }
        }
        if (limit === 100) {
            setPage(1);
            if (page > 0 && page < 10) {
                setPage(page + 1);
            }
        }
    }

    const prevPage = () => {
        if (limit === 20) {
            if (page <= 50 && page !== 1) {
                setPage(page - 1);
            }
        }
        if (limit === 50) {
            if (page <= 20 && page !== 1) {
                setPage(page - 1);
            }
        }
        if (limit === 100) {
            if (page <= 10 && page !== 1) {
                setPage(page - 1);
            }
        }
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPictureThunk({
            page,
            limit,
        }))
    }, [page, limit]);

    const {pictures} = useAppSelector(state => state.picturesReducer);


    return (
        <div>
            <div className={'nav-btn-menu'}>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
            <div className={'pictures-main-block'}>
                {pictures && pictures.map(picture => <Picture key={picture.id} picture={picture}/>)}
            </div>
        </div>
    );
};

export default Pictures;