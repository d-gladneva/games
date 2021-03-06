import React from 'react';
import s from './Card.module.css'

const Card = (props) => {
    return (
        <div className={s.item}>
            <div>
            <img className={s.card} src={require(`../../../../imgs/card${props.id}.png`)}/>
            </div>
            <img className={s.statusImg} src={require(`../../../../imgs/status${props.ip}.svg`)}/>
            <img className={s.raiting} src={require(`../../../../imgs/rating${props.r}.svg`)}/>
            <div>
                <span className={s.name}>{props.name}</span>
            </div>
            <div>
                <span className={s.desc}>{props.desc}</span>
            </div>
            <div>
                <img className={s.price} src={require(`../../../../imgs/price1.svg`)}/>
            </div>
        </div>
    )
};

export default Card;