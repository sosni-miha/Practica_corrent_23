import React, {useEffect, useState} from 'react';
import UserCard from "./UserCard";
import UserService from '../services/UserService';
import { UserResponse } from '../models/response/UserResponse';

const Users = () => {

    const[users, setUsers] = useState<UserResponse[]>();

    useEffect(()=>{
        UserService.getAllUsers().then(resp => setUsers(resp.data))
    },[])

    const deleteUser = async (id:string) => {
        UserService.deleteUser(id);
        UserService.getAllUsers().then(resp => setUsers(resp.data)) 
    }
    return (
        <div className="users">
            {users?.map((user) => (
                <UserCard user = {user} onClick={deleteUser}/>
            ))}
        </div>
    );
};

export default Users;