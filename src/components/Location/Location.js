import React from 'react';
import s from './Banner.module.css';

const Banner = () => {

    return (
        <div className={s.modal}>
            <div className={s.wrapper}>
                <div className={s.location}>
                    <img className={s.locImg} src={require(`../../imgs/pin.svg`)}/>
                    <span>Dublin, Republic of Ireland</span>
                </div>
                <div>
                    <img className={s.locImg} src={require(`../../imgs/logo.png`)}/>
                </div>
                <div>
                    <img className={s.iconImg} src={require(`../../imgs/icon1.svg`)}/>
                    <img className={s.iconImg} src={require(`../../imgs/icon2.svg`)}/>
                    <img className={s.iconImg} src={require(`../../imgs/icon3.svg`)}/>
                </div>
            </div>
        </div>
    )
};

export default Banner;