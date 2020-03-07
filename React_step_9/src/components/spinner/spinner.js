import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-spin"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
        </div>
    )
}

export default Spinner;
