import React from 'react';
import './Subscribe.css';
import subsicon from '../Subscribe/img/subscribe__icon.png';
import subsform from '../Subscribe/img/subscribe__form.png';

const Subscribe = () => {
    return (
        <div className="Subscribe">
            <div className="Blackdiv_box">
                <h5>Полезные советы и персональный предложения</h5>
                <h1>Эксклюзивная рассылка</h1>
                <div className="subscribe_list">
                    <div className="lichniy">
                       <img src={subsicon} /> <a href="#">Личный менеджер</a> <br />
                       <img src={subsicon} /> <a href="#">Доставка и оформление</a> <br /> 
                       <img src={subsicon} /> <a href="#">Индивидуальный дизайн</a>
                    </div>
                    <div className="btn_right">
                        <img src={subsform} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;