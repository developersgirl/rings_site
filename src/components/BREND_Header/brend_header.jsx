import React from 'react';
import brend1 from '../BREND_Header/img/filter1.png';
import brend2 from '../BREND_Header/img/filter2.png';
import brend3 from '../BREND_Header/img/filter3.png';
import brend4 from '../BREND_Header/img/filter4.png';
import brend5 from '../BREND_Header/img/filter5.png';
import brend6 from '../BREND_Header/img/filter6.png';

const brend_header = () => {
    return (
        <div className='b_header cont'>
            <div className="filter_item">
                <img src={brend1} />
                <img src={brend2} />
                <img src={brend3} />
                <img src={brend4} />
                <img src={brend5} />
                <img src={brend6} />
            </div>
        </div>
    );
}

export default brend_header;