import axios from '../../services/axios/axios.connect';
import { ISignup } from '../interfaces/signup.interface'
export class SignupService {
    async signup(signup: ISignup) {
        return await axios.post(`/users/signup`, signup)
    }
    async getAll() {
        return await axios.get(`/users`)
    }

}