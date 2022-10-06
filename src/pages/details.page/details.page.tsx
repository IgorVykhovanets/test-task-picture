import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {getDetailsPictureThunk} from "../../store/slices/picture.slice";
import DetailsPicture from "../../components/DetailsPicture/DetailsPicture";

const DetailsPage:FC = () => {


    const {state} = useLocation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getDetailsPictureThunk({id: state}));
    },[]);

    const {details_pic} = useAppSelector(state1 => state1.picturesReducer);


    return (
        <div>
            {details_pic && <DetailsPicture details={details_pic}/>}
        </div>
    );
};

export default DetailsPage;