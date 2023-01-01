import React from 'react';
import './Medium.css';
import second11 from '../Medium/img/second11.png';
import second12 from '../Medium/img/second12.png';
import second13 from '../Medium/img/second13.png';
import second14 from '../Medium/img/second14.png';
import second15 from '../Medium/img/second15.png';
import second16 from '../Medium/img/second16.png';
// import kolsa from '../Medium/img/firstring.png';

const Medium = () => {
    return (
        <div className="medium">
            <p>К мероприятиям</p>
            <h1>Настоящая красота здесь!</h1>
            <div className="mean">
                <img src={second11} />
                <img src={second12} />
                <img src={second13} />
                <img src={second14} />
                <img src={second15} />
                <img src={second16} />
            </div>
            <div className="uzuklarring">
                <div className="FirstDiv">
                    <div className="firstdiv1">
                        <h1>Кольца</h1>
                    </div>
                    <div className="firstdiv2">
                        <h1>серьги</h1>
                    </div>
                    <div className="firstdiv3">
                        <h1>подвески</h1>
                    </div>
                </div>
                <div className="FirstDiv">
                    <div className="firstdiv4">
                        <h1>запонки</h1>
                    </div>
                    <div className="firstdiv5">
                        <h1>браслеты</h1>
                    </div>
                    <div className="firstdiv6">
                        <h1>часы</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Medium;