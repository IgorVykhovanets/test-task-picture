import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import Pictures from "../../components/Pictures/Pictures";

const PicturesPage:FC = () => {

    const {state} = useLocation();

    return (
        <div>
            <Pictures limit={state}/>
        </div>
    );
};

export default PicturesPage;