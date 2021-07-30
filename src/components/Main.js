import React from 'react';
import CatList from './CatList';

import useApi from './hooks/useApi';

const Main = () => {

    const [cats] = useApi([]);


    return (
        <div>
           <CatList cats={cats}/> 
        </div>
    )
}

export default Main
