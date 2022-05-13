import React, { FC } from 'react';
import styles from './Post.module.scss';
import UserIcon from './../../../../assets/images/user_icon.png';

type PropsType = {
    message: string
    likesCount: number
}

export const Post: FC<PropsType> = (props) => {
    return (
        <div className={styles.item}>
            <figure className={styles.imageFigure}>
                <img src={UserIcon} alt="User-icon" />
            </figure>
            <div className={styles.message}>
                <div>{props.message}</div>
                <p>Like {props.likesCount}</p>
            </div>
        </div>
    )
}
