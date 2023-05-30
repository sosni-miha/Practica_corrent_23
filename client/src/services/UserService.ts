import $api from '../http'
import {AxiosResponse} from 'axios';
import {UserResponse} from '../models/response/UserResponse'

export default class UserService { 
    static async getAllUsers(): Promise<AxiosResponse<UserResponse[]>> {
        return $api.get<UserResponse[]>("/user/allusers");
    }

    static async addUser(firstName: string, 
        lastName: string, 
        email:string, 
        numberPhone: string, 
        position: string, jobPlace: string): Promise<AxiosResponse<UserResponse>> {
            return $api.post<UserResponse>("/user/adduser", {
                firstName,
                lastName,
                email,
                numberPhone,
                position,
                jobPlace
            });
    }

    static async deleteUser(id:string): Promise<AxiosResponse<UserResponse>>{
        return $api.delete<UserResponse>(`/user/deleteuser/${id}`)
    }

    static async updateUser(id:string, field: string, value: string): Promise<AxiosResponse<UserResponse>>{
        return $api.put<UserResponse>(`/user/updateuser/${id}`, {field,value})
    }
}