import React, { FC } from 'react';
import { UserResponse } from '../models/response/UserResponse';

interface UserCardProps{
    user: UserResponse,
    onClick: (id:string) => void
}

const UserCard:FC<UserCardProps> = (user) => {
    return (
        <div className="user_card" onClick={() => user.onClick(user.user.id)}>
            <div className="info">
                <span>{user.user.firstName}</span>
                <span>{user.user.lastName}</span>
                <span>{user.user.email}</span>
                <span>{user.user.numberPhone}</span>
                <span>{user.user.jobPlace}</span>
                <span>{user.user.position}</span>
            </div>
            <div className="buttons">
                <button className="update_button">Обновить</button>
                <button className="delete_button">Удалить</button>
            </div>
        </div>
    );
};

export default UserCard;