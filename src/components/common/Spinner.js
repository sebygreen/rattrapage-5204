import React from 'react';
import ReactLoading from "react-loading";

const Spinner = () => {
    return (
        <ReactLoading type={'spin'} height={30} width={30} />
    );
};

export default Spinner;