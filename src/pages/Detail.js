import React from 'react'
import { useParams } from 'react-router';

import ItemDetailContainer from '../components/ItemDetailContainer';

const Detail = () => {

    let { id } = useParams();
    id = parseInt(id);


    return (
        <section>
            <ItemDetailContainer idItem={id}/>    
        </section>
    )
}

export default Detail
