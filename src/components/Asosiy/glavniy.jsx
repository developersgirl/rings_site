import React from 'react';
import './glavniy.css';
import qiziluzuk from '../Asosiy/img/product-card__images.png';

const Asosiy = () => {
    return (
        <div className="asosiy_div">
            <div className="crumbs Cont">
                <a href="#">Главная </a> /
                <a href="#">Каталог </a> /
                <a href="#">Категория </a> /
                <a href="#">Подвеска Dolce & Gabarra</a>
            </div>
            <div className="Asosiy cont ">
                <div className="product-card_images">
                    <img src={qiziluzuk} />
                </div>
                <div className="main-desc">
                    <div className="rectangle">
                        <div className="rectangle_footer">
                            <h1>Подвеска Dolce & Gabbara</h1>
                            <div className="p_text">
                                <p>Категория:  Подвески</p>
                                <p>Бренд: Dolce & Gabbara</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
                                Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus.
                                Et nulla sit convallis orci est, fames sit luctus lacus.
                            </p>
                            <h1>200 000 ₽ </h1>
                            <div className="button_between">
                                <button className='btn1'>купить</button>
                                <button className='btn2'>добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Asosiy;