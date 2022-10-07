import React, {FC} from 'react';

import './not.found.page.modules.scss';

const NotFoundPage:FC = () => {
    return (
        <div className={'not-found-block'}>
            <h2>Вибачте , але такої сторінки не існує :( </h2>
        </div>
    );
};

export default NotFoundPage;