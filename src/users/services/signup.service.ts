import axios from '../../services/axios/axios.connect';
import { ISignup, IUpdateUser } from '../interfaces/signup.interface'
export class SignupService {
    async signup(signup: ISignup) {
        return await axios.post(`/users/signup`, signup)
    }
    async getAll() {
        return await axios.get(`/users`)
    }

    async getOne(userId: number) {
        return await axios.get(`/users/${userId}`)
    }

    async update(userId: number, data: IUpdateUser) {
        return await axios.put(`/users/${userId}`, data)
    }
    async delete(userId: number) {
        return await axios.delete(`/users/${userId}`)
    }
}