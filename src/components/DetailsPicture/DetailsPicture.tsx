import React, {FC} from 'react';
import {IPicture} from "../../interfaces/picture.interface";


const DetailsPicture: FC<{ details: IPicture; }> = ({details: {id, author, download_url}}) => {

    return (
        <div>
            <h4>{id}</h4>
            <h1>{author}</h1>
            <img src={download_url} alt="picture"/>
        </div>
    );
};

export default DetailsPicture;